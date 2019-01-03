import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InputField from '../common/InputField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { edit } from '../../actions/userActions';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    let userInfo = this.props.user.user;

    this.state = {
      ...userInfo,
      /*name: user.name,
      email: user.email,
      
      // чтобы не добавлять каждый раз делаем через спрэт оперейшн*/
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
    if (newProps.user) {
      let userInfo = newProps.user.user;
      this.setState({ ...userInfo });
    }
  }
  inputChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmitted(event) {
    event.preventDefault();

    var userData = {
      _id: this.state._id,
      name: this.state.name,
      email: this.state.email,
      adress: this.state.adress,
      phone: this.state.phone,
      birthDate: this.state.birthDate,
      rating: this.state.rating
    };

    this.props.edit(userData, this.props.history);
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
                placeholder="Email"
                type="text"
                onChange={this.inputChanged}
                value={this.state.email ? this.state.email : ''} // для связки value со стейтом чтоб писалось в инпуте
                name="email"
                error={this.state.errors.email}
              />
              <InputField
                placeholder="Adress"
                type="text"
                onChange={this.inputChanged}
                value={this.state.adress ? this.state.adress : ''} // если нет значения показать пустое поле
                name="adress"
                error={this.state.errors.adress}
              />
              <InputField
                placeholder="Phone"
                type="text"
                onChange={this.inputChanged}
                value={this.state.phone ? this.state.phone : ''} // если нет значения показать пустое поле
                name="phone"
                error={this.state.errors.phone}
              />
              <InputField
                placeholder="Birth Date"
                type="date"
                onChange={this.inputChanged}
                value={this.state.birthDate ? this.state.birthDate : ''} // если нет значения показать пустое поле
                name="birthDate"
                error={this.state.errors.birthDate}
              />
              <InputField
                placeholder="Rating"
                type="number"
                onChange={this.inputChanged}
                value={this.state.rating ? this.state.rating : ''} // если нет значения показать пустое поле
                name="rating"
                error={this.state.errors.rating}
              />

              <div className="btn-group">
                <div>
                  <button className="btn btn-primary">Save</button>
                </div>
                <div className="col-auto">
                  <Link to="/profile">
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

ProfileEdit.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { edit }
)(ProfileEdit);
