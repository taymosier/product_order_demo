import React, { Component } from 'react';
import { Col, Grid, Row} from 'react-bootstrap';

export class OrderSummary extends Component {
  constructor(props){
    super(props);
    this.subtotal = this.props.subtotal;
    this.tax = this.props.tax;
    this.total = this.props.total;
  }
  render(){
    return(
      <Grid fluid md={6} className="orderSummary">
           <Row md={5} >
             <Col md={4} className="labels">
               <Row md={3} className="col-md-offset-1">
                 <p md={3} className="subTotalLabel ">Subtotal:</p>
               </Row>
               <Row className="col-md-offset-1">
                 <p md={3} className="taxLabel ">Tax:</p>
               </Row>
               <Row className="col-md-offset-1">
                 <p md={3} className="totalLabel ">Total:</p>
               </Row>
             </Col>
             <Col className="costs" md={1} >
               <Row className="subTotal">
                 ${this.subtotal}
               </Row>
               <Row className="tax">
                 ${this.tax}
               </Row>
               <Row className="total">
                 ${this.total}
               </Row>
             </Col>
             <Col md={6} className="messages ">
               <Row className="col-md-offset-1 nopadding messageOrderSubmitted">
                 Order Submitted!
               </Row>
               <Row className="col-md-offset-1 nopadding messageThankYou">
                 Thank You!
               </Row>
             </Col>
           </Row>
         </Grid>
    );
  }
}
