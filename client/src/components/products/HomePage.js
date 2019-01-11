import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../actions/productActions';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      Upload: false
    };

    this.props.getProducts();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.products) {
      this.setState({ products: newProps.products, Upload: true });
    }
  }

  render() {
    if (this.state.Upload) {
      const Products = this.state.products.map(product => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ));

      return <div>{this.state.Upload ? Products : ''}</div>;
    }
    return <div>wait please ))</div>;
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(HomePage);
