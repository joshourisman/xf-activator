import React from 'react';
import { Helmet } from 'react-helmet';
import { AppBar, Toolbar, Typography, Input, FormControl, Select, TextField } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import queryString from 'query-string';
import { StyleSheet, css } from 'aphrodite';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'appletv',
      network: '',
      code: '',
    };
  }

  networks = device => ({
    ABC: {
      name: 'ABC',
      domain: 'watchabc.com',
      redirect: `http://www.watchabc.com/activate?device=${device}`,
    },
    AETV: {
      name: 'A&amp;E',
      domain: 'aetv.com',
      redirect: `http://www.aetv.com/activate?device=${device}`,
    },
    AMC: {
      name: 'AMC',
      domain: 'amc.com',
      redirect: `http://www.amc.com/activate?device=${device}`,
    },
    CookingChannelIT: {
      name: 'Cooking Channel',
      domain: 'watch.cookingchanneltv.com',
      redirect: `http://watch.cookingchanneltv.com/activate/thanks.html`,
    },
    DIYNetwork: {
      name: 'DIY',
      domain: 'watch.diynetwork.com',
      redirect: `http://watch.diynetwork.com/activate/thanks.html`,
    },
    FoodNetwork: {
      name: 'Food Network',
      domain: 'watch.foodnetwork.com',
      redirect: `http://watch.foodnetwork.com/activate/thanks.html`,
    },
    FYI: {
      name: 'FYI',
      domain: 'fyi.tv',
      redirect: `http://www.fyi.tv/activate?device=${device}`,
    },
    HGTV: {
      name: 'HGTV',
      domain: 'watch.hgtv.com',
      redirect: `http://watch.hgtv.com/activate/thanks.html`,
    },
    HISTORY: {
      name: 'History Channel',
      domain: 'history.com',
      redirect: `http://www.history.com/activate?device=${device}`,
    },
    LIFETIME: {
      name: 'Lifetime',
      domain: 'mylifetime.com',
      redirect: `http://www.mylifetime.com/activate?device=${device}`,
    },
    TravelChannel: {
      name: 'Travel Channel',
      domain: 'watch.travelchannel.com',
      redirect: `http://watch.travelchannel.com/activate/thanks.html#${device}&Travel`,
    },
  });

  generateLink = () => {
    const { device, network, code } = this.state;

    const params = {
      reg_code: code,
      noflash: 'true',
      mso_id: 'Comcast_SSO',
      requestor_id: network,
      domain_name: this.networks(device)[network].domain,
      redirect_url: this.networks(device)[network].redirect,
    };

    return `https://api.auth.adobe.com/api/v1/authenticate?${queryString.stringify(params)}`;
  };

  handleSelect = name => event => {
    const value = name === 'code' ? event.target.value.toUpperCase() : event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { device, network, code } = this.state;

    const link = network !== '' && code !== '' ? this.generateLink() : '';

    return (
      <div>
        <Helmet>
          <title>XF-Activation</title>
        </Helmet>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              XF-Activation
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={css(styles.activator)}>
          <div className={css(styles.inputs)}>
            <FormControl>
              <InputLabel htmlFor="device">Device</InputLabel>
              <Select
                native
                value={device}
                onChange={this.handleSelect('device')}
                input={<Input id="device" />}
              >
                <option value="appletv">Apple TV</option>
                <option value="roku">Roku</option>
                <option value="xbox360">Xbox 360</option>
                <option value="xboxone">Xbox One</option>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="network">Network</InputLabel>
              <Select
                native
                value={network}
                onChange={this.handleSelect('network')}
                input={<Input id="network" />}
              >
                <option value="" disabled />
                <option value="ABC">ABC</option>
                <option value="AETV">A&amp;E</option>
                <option value="AMC">AMC</option>
                <option value="CookingChannelIT">Cooking Channel</option>
                <option value="DIYNetwork">DIY</option>
                <option value="FoodNetwork">Food Network</option>
                <option value="FYI">FYI</option>
                <option value="HGTV">HGTV</option>
                <option value="HISTORY">History</option>
                <option value="LIFETIME">Lifetime</option>
                <option value="TravelChannel">Travel Channel</option>
              </Select>
            </FormControl>
            <TextField label="Activation Code" value={code} onChange={this.handleSelect('code')} />
          </div>
          <div>
            {link !== ''
              ? <a href={link}>Click here to activate.</a>
              : <span>
                  You must select a network and enter the activation code on your screen.
                </span>}
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  activator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
    marginBottom: 50,
  },
});
