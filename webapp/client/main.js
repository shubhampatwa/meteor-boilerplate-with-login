import { Meteor } from 'meteor/meteor';
import React from 'react';

import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

import App from '../imports/ui/layout/app.jsx';


Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    </MuiThemeProvider>,
  document.getElementById('app'));
});
