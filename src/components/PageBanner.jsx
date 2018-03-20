import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export class PageBanner extends Component {
  render(){
    return(
      <PageHeader
        className="text-center"
      >
          Product Order System
      </PageHeader>
    );
  }
}
