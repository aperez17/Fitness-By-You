import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import SideBarMenu from './components/SideBarMenu';

import { browserHistory } from 'react-router';

export default class Main extends Component {
  render () {
    return (
      <App centered={false}> 
        <Split fixed={false} showOnResponsive={'priority'}>
          <SideBarMenu />
          <Box
            justify='center'
            align='start'
            pad='medium'
            full={true}>
            {this.props.children}
          </Box>
        </Split>
      </App>
    );
  }
};
