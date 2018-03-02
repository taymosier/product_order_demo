import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export class Instructions extends Component {

  render(){
    return(
      <Panel className="instructions text-center">
        <Panel.Body>
          Enter the quanity needed for each product. <br />
          The minimum order accepted is one of each item.
        </Panel.Body>
      </Panel>
    );
  }
}
