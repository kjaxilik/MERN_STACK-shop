import React, { Component } from 'react';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/userActions.js';

import InputField from '../common/InputField';
const Style = {
  marginTop: `50%`,
  marginBottom: `50%`
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
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
      password: this.state.password
    };

    this.props.login(userData, this.props.history);
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
              {this.state.errors.passport && (
                <div className="text-danger mb-3">{this.state.errors.passport}</div>
              )}

              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
