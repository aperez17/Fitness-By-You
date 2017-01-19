import React, { Component } from 'react';

import Title from 'grommet/components/Title';
import Pulse from 'grommet/components/icons/Pulse';
import Box from 'grommet/components/Box';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import Image from 'grommet/components/Image';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Animate from 'grommet/components/Animate';
import Label from 'grommet/components/Label';

export default class WorkoutCellView extends Component {

  render () {
    var list = [];
    for (var i=0; i<this.props.steps.length; i++) {
      list.push(<li key={this.props.title + '=:' + i}>{this.props.steps[i]}</li>)
    }
    return (
      <tr>
        <td style={{paddingRight:20}}><Pulse><AddCircleIcon /></Pulse></td>
        <td>
            <div style={{maxWidth: 182, maxHeight: 187.6, verticalAlign: 'top', padding: 10}}>
              <Label>{this.props.title}</Label>
              <a onClick={this.props.onClickImageFn}>
                <Animate visible={this.props.shouldShowImage}
                  enter={{"animation": "slide-up", "duration": this.props.animationSpeed, "delay": this.props.animationSpeed}}
                  leave={{"animation": "slide-down", "duration": this.props.animationSpeed, "delay": 0}}
                  keep={this.props.shouldShowImage}>
                    <Image fit="contain" src={this.props.image}/>
                </Animate>
                <Animate visible={!this.props.shouldShowImage}
                  enter={{"animation": "slide-up", "duration": this.props.animationSpeed, "delay": this.props.animationSpeed}}
                  leave={{"animation": "slide-down", "duration": this.props.animationSpeed, "delay": 0}}
                  keep={!this.props.shouldShowImage}>
                    <ol>{list}</ol>
                </Animate>
              </a>
          </div>
        </td>
        <td>
          <Box>
            <Meter
              type='arc'
              size="small"
              vertical={false}
              onActive={function(){return undefined;}}
              value={this.props.time}
              max={this.props.maxTime} />
              <Value value={this.props.time}
               units='Minutes' />
           </Box>
        </td>
      </tr>
    );
  }
};
