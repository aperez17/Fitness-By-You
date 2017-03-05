import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Button from 'grommet/components/Button';

export default class HomeView extends Component {
  render () {
    return (
      <Section primary={true}>
        <Heading>My Schedule</Heading>
        <table>
          <tbody>
          </tbody>
        </table>
      </Section>
    );
  }
};
