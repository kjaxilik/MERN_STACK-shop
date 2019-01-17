import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserProducts } from '../../actions/productActions';
import ProductCard from '../products/SingleProduct';

class ProfileProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
    this.props.getUserProducts(this.props.user._id);
  }

  componentDidMount() {
    if (this.props.products.length > 0) {
      this.setState({ products: this.props.products });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.products) {
      this.setState({ products: newProps.products });
    }

    if (
      (newProps.user && newProps.products.length === 0) ||
      newProps.products.length === undefined
    ) {
      this.props.getUserProducts(newProps.user._id);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.products.length > 0
          ? this.state.products.map(el => <ProductCard key={el._id} prod={el} />)
          : ''}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.userProducts,
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getUserProducts }
)(ProfileProducts);
