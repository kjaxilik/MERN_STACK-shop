import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserById } from '../actions/userActions.js';
import InputField from '../components/common/InputField';

import Avatar from './img/avatars/avatar.jpg';
import Bgr from './img/bgrs/bgr.jpg';

import './userContainer.css';

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.password,
      address: '',
      phone: '',
      email: '',
      birthDate: '',
      rating: '',
      photo: '',

      login: '',
      password: '',
      userEdit: false,
      errors: {}
    };
    this.userEditClick = this.userEditClick.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    //this.userRow = this.userRow.bind(this);
    //this.formSubmitted = this.formSubmitted.bind(this);
  }

  userEditClick(event) {
    event.preventDefault();

    this.setState({ userEdit: true });
    console.log(this.state.userEdit);
  }

  inputChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { user } = this.props.user;
    const { userEdit } = this.state;
    //console.log(user);

    const userEditContainer = (
      <div className="userInner userEdit">
        <InputField
          placeholder="Name"
          type="text"
          name="name"
          value={user.name} // для связки value со стейтом чтоб писалось в инпуте
          onChange={this.inputChanged}
          error={this.state.errors.name}
        />
      </div>
    );

    const userNormalState = (
      <div className="userInner">
        <h1>{user.name}</h1>
        <h3>Address: {user.adress}</h3>
        <h4>Phone number: {user.phone}</h4>
        <h4>email: {user.email}</h4>
        <h4>Birth Date: {user.birthDate}</h4>
        <h4>Rating: {user.rating}</h4>
        <button onClick={this.userEditClick} className="btn btn-primary">
          Edit
        </button>
      </div>
    );

    return (
      <div className="userContainer">
        <div className="userBgrCont">
          <img className="userBgr" src={Bgr} alt="Background Image" />
          <div className="userInfo">
            <ul>
              <li>
                <ul>
                  <li>205</li>
                  <li>Followers</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>90</li>
                  <li>Following</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>46</li>
                  <li>Products</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>27</li>
                  <li>Purchasings</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="avaRound">
          <img className="ava" src={Avatar} alt="Image" />
        </div>

        {userEdit ? userEditContainer : userNormalState}
      </div>
    );
  }
}

UserContainer.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUserById }
)(UserContainer);
