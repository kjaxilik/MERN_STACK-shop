import React, { Component } from 'react'

import ProfileSidebar from './ProfileSidebar';

class ProfileContainer extends Component {
    render() {
        return (
            <div className="container mt-5" >
                <div className="row" >
                    <ProfileSidebar/>
                </div>
            </div>
        )
    }
}

export default ProfileContainer;