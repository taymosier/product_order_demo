import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { WelcomeContent } from './WelcomeContent.jsx';

export class TopContent extends Component {
  render(){
    return(
      <Row className="show-grid topContentRow fluid" md={16}>
        <WelcomeContent />
      </Row>
    )
  }
}
