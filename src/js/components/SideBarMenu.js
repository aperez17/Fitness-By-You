import React, { Component } from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';

export default class SideBarMenu extends Component {
  render() {
    return (
      <Sidebar colorIndex='neutral-1'
        fixed={false}
        full={true}>
        <Header pad='medium'
          justify='between'>
          <Title>
            Fitness By You
          </Title>
        </Header>
        <Box flex='grow'
          justify='start'>
          <Menu primary={true}>
            <Anchor href='#'>
              My Schedule
            </Anchor>
            <Anchor href='#'
              className="active">
              Add New Workout
            </Anchor>
            <Anchor href='#'>
              Create a workout plan
            </Anchor>
          </Menu>
        </Box>
        <Footer pad='medium'>
          <Button icon={<User />} />
        </Footer>
      </Sidebar>
    );
  }
}
