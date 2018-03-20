import React, { Component } from 'react';
import { Col, Fade, Grid, Row} from 'react-bootstrap';

export class OrderSummary extends Component {
  constructor(props){
    super(props);
    this.subtotal = this.props.subtotal;
    this.tax = this.props.tax;
    this.total = this.props.total;
  }
  render(){
    return(
      <Fade in >
        <Grid fluid lg={6} md={6} sm={12} xs={10} xsOffset={1} className="orderSummary">
             <Row md={12} sm={12} xs={12}>

               {/* Labels */}
               <Col lg={2} md={4} sm={4} xs={2} xsOffset={1} className="labels">
                 <Row >
                   <p md={3} className="subTotalLabel ">Subtotal:</p>
                 </Row>
                 <Row mdOffset={1}>
                   <p className="taxLabel ">Tax:</p>
                 </Row>
                 <Row mdOffset={1}>
                   <p className="totalLabel ">Total:</p>
                 </Row>
               </Col>

               {/* Totals */}
               <Col className="costs" lg={2} md={4} sm={4} xs={4} xsOffset={0}>
                 <Row className="subTotal">
                   ${this.subtotal}
                 </Row>
                 <Row className="tax" >
                   ${this.tax}
                 </Row>
                 <Row className="total" >
                   ${this.total}
                 </Row>
               </Col>

               {/* Confirmation messages */}
               <Col lg={6} md={5} sm={4} xs={3} xsOffset={1} className="messages ">
                 <Row className="col-md-offset-1 nopadding messageOrderSubmitted">
                   Order Submitted!
                 </Row>
                 <Row className="col-md-offset-1 nopadding messageThankYou">
                   Thank You!
                 </Row>
               </Col>
             </Row>
           </Grid>
         </Fade>
    );
  }
}
