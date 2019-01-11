import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InputField from '../common/InputField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addProduct } from '../../actions/productActions';

class ProductEdit extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      price: '',
      category: '',
      seller: '',
      count: '',
      sold: '',
      rating: '',
      mainImg: '',
      errors: {}
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  /* так как компонент загружается а потом получает props надо запустить функцию componentWillReceiveProps */
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }

    if (newProps.newProduct) {
      this.props.history.push('/product/' + newProps.newProduct._id);
    }
  }
  inputChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmitted(event) {
    event.preventDefault();

    var productData = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      category: this.state.category,
      seller: this.state.userId,
      count: this.state.count,
      sold: this.state.sold,
      rating: this.state.rating,
      mainImg: this.state.mainImg
    };

    this.props.addProduct(productData, this.props.user);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <form onSubmit={this.formSubmitted} noValidate>
              <InputField
                placeholder="Name"
                type="text"
                onChange={this.inputChanged}
                value={this.state.name ? this.state.name : ''} // для связки value со стейтом чтоб писалось в инпуте
                name="name"
                error={this.state.errors.name}
              />
              <InputField
                placeholder="Description"
                type="text"
                onChange={this.inputChanged}
                value={this.state.description ? this.state.description : ''} // для связки value со стейтом чтоб писалось в инпуте
                name="description"
                error={this.state.errors.description}
              />
              <InputField
                placeholder="Price"
                type="number"
                onChange={this.inputChanged}
                value={this.state.price ? this.state.price : ''} // если нет значения показать пустое поле
                name="price"
                error={this.state.errors.price}
              />
              <InputField
                placeholder="Category"
                type="text"
                onChange={this.inputChanged}
                value={this.state.category ? this.state.category : ''} // если нет значения показать пустое поле
                name="category"
                error={this.state.errors.category}
              />
              <InputField
                placeholder="Seller"
                type="text"
                onChange={this.inputChanged}
                value={this.state.seller ? this.state.seller : ''} // если нет значения показать пустое поле
                name="seller"
                error={this.state.errors.seller}
              />
              <InputField
                placeholder="Count"
                type="number"
                onChange={this.inputChanged}
                value={this.state.count ? this.state.count : ''} // если нет значения показать пустое поле
                name="count"
                error={this.state.errors.count}
              />
              <InputField
                placeholder="Soldout"
                type="number"
                onChange={this.inputChanged}
                value={this.state.sold ? this.state.sold : ''} // если нет значения показать пустое поле
                name="sold"
                error={this.state.errors.sold}
              />
              <InputField
                placeholder="Rating"
                type="number"
                onChange={this.inputChanged}
                value={this.state.rating ? this.state.rating : ''} // если нет значения показать пустое поле
                name="rating"
                error={this.state.errors.rating}
              />
              <InputField
                placeholder="Image"
                type="file"
                onChange={this.inputChanged}
                value={this.state.mainImg ? this.state.mainImg : ''} // если нет значения показать пустое поле
                name="mainImg"
                error={this.state.errors.mainImg}
              />

              <div className="btn-group">
                <div>
                  <button className="btn btn-primary">Publish</button>
                </div>
                <div className="col-auto">
                  <Link to="/products">
                    <button className="btn btn-secondary">Cancel</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ProductEdit.propTypes = {
  product: PropTypes.object.isRequired
  //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProduct }
)(ProductEdit);
