import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProfileSidebar extends Component{

    render(){

        const { user } = this.props.user;

        return (
            <div className="col-md-3 py-3 d-flex flex-md-column border" >
                <div className="w-50 mx-auto mb-3" >
                    <img alt="avatar" src="/images/users/default.png" className="img-fluid m-auto rounded-circle" />
                </div>
                <div className="text-center" >
                    <h5>{user.name}</h5>
                    <Link to="/profile/edit" className="btn btn-secondary btn-sm" >Edit</Link>
                </div>
            </div>
        );

    }

}

ProfileSidebar.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect( mapStateToProps )(ProfileSidebar);