import json
import re

from collections import OrderedDict
from fabric.colors import yellow, green
from fabric.api import task, local
from fabric.utils import puts


@task
def release(part='patch'):
    new_version = increment_version(part)
    local('git flow release start {}'.format(new_version))
    write_version(new_version)
    local('git commit -a -m "Upped version."')
    local('yarn build')
    local('git commit -a -m "Built."')
    local('git flow release finish {}'.format(new_version))


def increment_version(part="patch"):
    def format_version(groups):
        version = "{0}.{1}.{2}".format(*[g[1] for g in groups.items()])

        if groups['beta'] != 0:
            version = '{}b{}'.format(version, groups['beta'])

        return version

    current_version = read_version()

    regex = re.compile(r'(\d+)\.(\d+)\.(\d+)(b\d+)?')
    match = regex.match(current_version).groups()

    groups = OrderedDict([
        ('major', int(match[0])),
        ('minor', int(match[1])),
        ('patch', int(match[2])),
        ('beta', int(match[3][1:]) if match[3] else 0),
    ])

    if part == 'major':
        groups['major'] += 1
        groups['minor'] = 0
        groups['patch'] = 0
        groups['beta'] = 0
    elif part == 'minor':
        groups['minor'] += 1
        groups['patch'] = 0
        groups['beta'] = 0
    elif part == 'patch':
        groups['patch'] += 1
        groups['beta'] = 0
    elif part == 'beta':
        groups['beta'] += 1

    new_version = format_version(groups)

    return new_version


def read_version():
    with open('package.json', 'r') as f:
        current_version = json.load(f)['version']

    return current_version


def write_version(part="patch", new_version=None):
    if new_version is None:
        new_version = increment_version(part=part)

    path = 'package.json'
    with open(path, 'r') as f:
        package = json.load(f, object_pairs_hook=OrderedDict)

    package['version'] = new_version
    with open(path, 'w') as f:
        output = json.dumps(package, indent=2, separators=(',', ': '))
        f.write('{}\n'.format(output))

    puts(yellow("Version is now: ") + green(new_version))
