webpackJsonp([1],{0:function(e,t,n){n("j1ja"),e.exports=n("EAxn")},EAxn:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n("U7vG"),r=a(o),l=n("O27J"),i=n("rGbO"),c=n("I5fo"),u=a(c),_=document.querySelector("#root"),d=function(e){(0,l.render)(r.default.createElement(i.AppContainer,null,r.default.createElement(e,null)),_)};d(u.default);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"root","/Users/josho/Projects/xf-activation/src/client/index.js"),__REACT_HOT_LOADER__.register(d,"mount","/Users/josho/Projects/xf-activation/src/client/index.js"))}()},I5fo:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n("U7vG"),_=a(u),d=n("PIAa"),m=n("Q4lS"),s=n("fzMo");n("7SuA");var f=n("OAwv"),p=a(f),v=n("BK4P"),h=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.networks=function(){return n.__networks__REACT_HOT_LOADER__.apply(n,arguments)},n.generateLink=function(){return n.__generateLink__REACT_HOT_LOADER__.apply(n,arguments)},n.handleSelect=function(){return n.__handleSelect__REACT_HOT_LOADER__.apply(n,arguments)},n.state={device:"appletv",network:"",code:""},n}return i(t,e),c(t,[{key:"__networks__REACT_HOT_LOADER__",value:function(){return this.__networks__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__networks__REACT_HOT_LOADER__",value:function(e){return{ABC:{name:"ABC",domain:"watchabc.com",redirect:"http://www.watchabc.com/activate?device="+e},AETV:{name:"A&amp;E",domain:"aetv.com",redirect:"http://www.aetv.com/activate?device="+e},AMC:{name:"AMC",domain:"amc.com",redirect:"http://www.amc.com/activate?device="+e},CookingChannelIT:{name:"Cooking Channel",domain:"watch.cookingchanneltv.com",redirect:"http://watch.cookingchanneltv.com/activate/thanks.html"},DIYNetwork:{name:"DIY",domain:"watch.diynetwork.com",redirect:"http://watch.diynetwork.com/activate/thanks.html"},FoodNetwork:{name:"Food Network",domain:"watch.foodnetwork.com",redirect:"http://watch.foodnetwork.com/activate/thanks.html"},FYI:{name:"FYI",domain:"fyi.tv",redirect:"http://www.fyi.tv/activate?device="+e},HGTV:{name:"HGTV",domain:"watch.hgtv.com",redirect:"http://watch.hgtv.com/activate/thanks.html"},HISTORY:{name:"History Channel",domain:"history.com",redirect:"http://www.history.com/activate?device="+e},LIFETIME:{name:"Lifetime",domain:"mylifetime.com",redirect:"http://www.mylifetime.com/activate?device="+e},TravelChannel:{name:"Travel Channel",domain:"watch.travelchannel.com",redirect:"http://watch.travelchannel.com/activate/thanks.html#"+e+"&Travel"}}}},{key:"__generateLink__REACT_HOT_LOADER__",value:function(){return this.__generateLink__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__generateLink__REACT_HOT_LOADER__",value:function(){var e=this.state,t=e.device,n=e.network,a=e.code,o={reg_code:a,noflash:"true",mso_id:"Comcast_SSO",requestor_id:n,domain_name:this.networks(t)[n].domain,redirect_url:this.networks(t)[n].redirect};return"https://api.auth.adobe.com/api/v1/authenticate?"+p.default.stringify(o)}},{key:"__handleSelect__REACT_HOT_LOADER__",value:function(){return this.__handleSelect__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleSelect__REACT_HOT_LOADER__",value:function(e){var t=this;return function(n){var a="code"===e?n.target.value.toUpperCase():n.target.value;t.setState(o({},e,a))}}},{key:"render",value:function(){var e=this.state,t=e.device,n=e.network,a=e.code,o=""!==n&&""!==a?this.generateLink():"";return _.default.createElement("div",null,_.default.createElement(d.Helmet,null,_.default.createElement("title",null,"XF-Activation")),_.default.createElement(m.AppBar,{position:"static"},_.default.createElement(m.Toolbar,null,_.default.createElement(m.Typography,{type:"title",color:"inherit"},"XF-Activation"))),_.default.createElement("div",{className:(0,v.css)(E.activator)},_.default.createElement("div",{className:(0,v.css)(E.inputs)},_.default.createElement(m.FormControl,null,_.default.createElement(s.InputLabel,{htmlFor:"device"},"Device"),_.default.createElement(m.Select,{native:!0,value:t,onChange:this.handleSelect("device"),input:_.default.createElement(m.Input,{id:"device"})},_.default.createElement("option",{value:"appletv"},"Apple TV"),_.default.createElement("option",{value:"roku"},"Roku"),_.default.createElement("option",{value:"xbox360"},"Xbox 360"),_.default.createElement("option",{value:"xboxone"},"Xbox One"))),_.default.createElement(m.FormControl,null,_.default.createElement(s.InputLabel,{htmlFor:"network"},"Network"),_.default.createElement(m.Select,{native:!0,value:n,onChange:this.handleSelect("network"),input:_.default.createElement(m.Input,{id:"network"})},_.default.createElement("option",{value:"",disabled:!0}),_.default.createElement("option",{value:"ABC"},"ABC"),_.default.createElement("option",{value:"AETV"},"A&E"),_.default.createElement("option",{value:"AMC"},"AMC"),_.default.createElement("option",{value:"CookingChannelIT"},"Cooking Channel"),_.default.createElement("option",{value:"DIYNetwork"},"DIY"),_.default.createElement("option",{value:"FoodNetwork"},"Food Network"),_.default.createElement("option",{value:"FYI"},"FYI"),_.default.createElement("option",{value:"HGTV"},"HGTV"),_.default.createElement("option",{value:"HISTORY"},"History"),_.default.createElement("option",{value:"LIFETIME"},"Lifetime"),_.default.createElement("option",{value:"TravelChannel"},"Travel Channel"))),_.default.createElement(m.TextField,{label:"Activation Code",value:a,onChange:this.handleSelect("code")})),_.default.createElement("div",null,""!==o?_.default.createElement("a",{href:o},"Click here to activate."):_.default.createElement("span",null,"You must select a network and enter the activation code on your screen."))))}}]),t}(_.default.Component);t.default=h;var E=v.StyleSheet.create({activator:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},inputs:{display:"flex",justifyContent:"space-evenly",width:"100%",marginTop:10,marginBottom:50}});!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"App","/Users/josho/Projects/xf-activation/src/components/App/index.js"),__REACT_HOT_LOADER__.register(E,"styles","/Users/josho/Projects/xf-activation/src/components/App/index.js"))}()}},[0]);
//# sourceMappingURL=main-5f4a34e3021da14363e3.js.map