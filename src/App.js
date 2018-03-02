import React, { Component } from 'react';
import { Button, Col, Grid, Label, Panel, Row} from 'react-bootstrap';
import { Instructions } from './components/Instructions.jsx';
import { OrderSummary } from './components/OrderSummary.jsx';
import { Product } from './components/Product.jsx';
import { PageBanner } from './components/PageBanner.jsx';
import {calculateSubtotal, calculateTax, calculateTotal, disableInputs} from './functions.js';

import './App.css';
import './index.css';

// TODO
// - set limits on product quantity inputs

let taxRate = .0675;

function validateInputs(plates, napkins, cups){
  if (plates > 0 && napkins > 0 && cups > 0){
    return true;
  }
  return false;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      plates: 0,
      napkins: 0,
      cups: 0,
      isValid: false,
      subtotal: 0,
      submitted: false,
      tax: 0,
      total: 0,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  updateQuantity(item, value){
    console.log(item.product);
    this.setState({
      submitted: false,
      [item.product]: value,
    });
  }


  handleSubmit(e){
    e.preventDefault();
    console.log('handling submit');
    // function that checks if all products have a quantity of at least 1
    let isValid = validateInputs(this.state.plates, this.state.napkins, this.state.cups);
    // if true, calls function that calculates subtotal
    let subTotal = calculateSubtotal(this.state.plates, this.state.napkins, this.state.cups);
    let tax = calculateTax(taxRate, subTotal)
    if ( isValid ){
      disableInputs();
      this.setState({
        submitted: true,
        subtotal: [subTotal],
        tax: [tax],
        total: [calculateTotal(subTotal, tax)],
      });
      console.log(this.state.total);
    } else {
      // logic for errors in user inputs
    }
  }

  render() {
    return (
      <div className="App ">
        <PageBanner />
        <Grid fluid >
          <Row className=" show-grid col-md-offset-4">
            <Col md={6}>
              <Instructions />
            </Col>
          </Row>
          <Row className="show-grid col-md-offset-4" >
            <Col md={6}>
              <Product product="plates" quantity="18" price="1.50" passQuantityToApp={this.updateQuantity}/>
              {this.state.submitted && this.state.plates < 1
                ? <Label bsStyle="danger">Quantity Required</Label>
                : null
              }
            </Col>
          </Row>
          <Row className="show-grid col-md-offset-4">
            <Col md={6}>
              <Product product="napkins" quantity="24" price="1.59" passQuantityToApp={this.updateQuantity}/>
            </Col>
          </Row>
          <Row className="show-grid col-md-offset-4">
            <Col md={6}>
              <Product product="cups" quantity="30" price="3.79" passQuantityToApp={this.updateQuantity}/>
            </Col>
          </Row>
          <Row className="show-grid col-md-offset-4">
            <Col md={6}>
              <Panel >
                { this.state.submitted && this.state.total > 0
                  ? <OrderSummary subtotal={this.state.subtotal} tax={this.state.tax} total={this.state.total} />
                  : <Button bsStyle="primary submitButton" onClick={this.handleSubmit}>Submit Order</Button>
                }
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
