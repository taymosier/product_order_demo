import React, { Component } from 'react';
import { ControlLabel, Panel, Image, FormGroup, FormControl } from 'react-bootstrap';

export class Product extends Component {
  constructor(props){
    super(props);
    this.product = this.props.product;
    this.quantity = this.props.quantity;
    this.price = this.props.price;
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      product: this.props.product,
      value: '',
    };
  }

  handleChange(e){
    const item = this.state;
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
    this.props.passQuantityToApp(item, e.target.value);
  }


  render(){
    let productName = this.product;
    let productQuantity = this.quantity;
    let productValue = this.price;
    productName = this.product.charAt(0).toUpperCase() + this.product.substr(1);
    let controlIdText = this.product+'quantity';
    return(
      <Panel >
        <Panel.Heading>
            {productName} (pk of {productQuantity}) - ${productValue}
        </Panel.Heading>

        <Panel.Body >
          <Image md={3} className="productImage" src={require(`../images/${this.product.slice(0,this.product.length-1)}.jpg`)} thumbnail/>
          <FormGroup
            controlId={controlIdText.toString()}
            md={3}
            sm={12}
            xs={12}
          >
            <ControlLabel
              className="quantityLabel"
              >
                Quantity:
            </ControlLabel>
            <FormControl
              type="number"
              min="0"
              max="100"
              placeholder=""
              value={this.state.value}
              onChange={this.handleChange}
              className="quantityInput"
            />
          </FormGroup>
        </Panel.Body>
      </Panel>
    );
  }
}
