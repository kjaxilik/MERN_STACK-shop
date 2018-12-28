import React, { Component } from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { registrate } from '../../actions/userActions';

import InputField from '../common/InputField';
const Style = {
  marginTop: `50%`,
  marginBottom: `50%`
};

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  inputChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmitted(event) {
    event.preventDefault();

    var userData = {
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registrate(userData, this.props.history);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <form onSubmit={this.formSubmitted} style={Style}>
              <InputField
                placeholder="Login"
                type="text"
                name="login"
                value={this.state.login} // для связки value со стейтом чтоб писалось в инпуте
                onChange={this.inputChanged}
                error={this.state.errors.login}
              />
              <InputField
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password} // для связки value со стейтом чтоб писалось в инпуте
                onChange={this.inputChanged}
                error={this.state.errors.password}
              />
              <InputField
                placeholder="Confirm password"
                type="password"
                name="password2"
                value={this.state.password2} // для связки value со стейтом чтоб писалось в инпуте
                onChange={this.inputChanged}
                error={this.state.errors.password2}
              />

              <button className="btn btn-primary">Registrate</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  registrate: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registrate }
)(Registration);
