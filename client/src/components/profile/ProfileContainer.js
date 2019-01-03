import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
  render() {
    const { user } = this.props.user;

    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="span3 well">
              <div className="text-center">
                <a href="#aboutModal" data-toggle="modal" data-target="#myModal">
                  <img
                    src="/images/users/avatars/avatar.jpg"
                    name="aboutme"
                    width="240"
                    height="240"
                    alt="ava"
                  />
                </a>

                <h3>{user.name}</h3>
                <em>click my face for more</em>
                <br />
                <Link to="/profile/edit" className="btn btn-primary btn-sm">
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="myModal"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                  <h4 className="modal-title" id="myModalLabel">
                    More about: {user.name}
                  </h4>
                </div>
                <div className="modal-body">
                  <div className="text-center">
                    <img
                      src="/images/users/avatars/avatar.jpg"
                      name="aboutme"
                      width="240"
                      height="240"
                      alt="ava"
                    />
                    <h3 className="media-heading">
                      {user.name} <small>{user.adress}</small>
                    </h3>
                    <span>
                      <strong>Skills: </strong>
                    </span>
                  </div>
                  <span className="label label-warning">HTML5/CSS</span>
                  <span className="label label-info">Adobe CS 5.5</span>
                  <span className="label label-info">Microsoft Office</span>
                  <span className="label label-success">Windows XP, Vista, 7</span>
                  <hr />
                  <p className="text-left">
                    <strong>Bio: </strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit
                    amet commodo a, vulputate vel tellus.
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">
                    Close info about: {user.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
ProfileContainer.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileContainer);
