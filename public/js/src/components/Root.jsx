import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory } from 'react-router'

import Layout from './Layout.jsx';
import App from './App.jsx';
import RegisterAndLoginBox from './RegisterAndLoginBox.jsx';

export default class Root extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
    // return (
    //   <MuiThemeProvider>
    //     <Router history={browserHistory}>
    //       <Route path="/" component={App}/>
    //       <Route path="RegisterAndLogin" component={RegisterAndLoginBox}/>
    //     </Router>
    //   </MuiThemeProvider>
    // )
  }
}

