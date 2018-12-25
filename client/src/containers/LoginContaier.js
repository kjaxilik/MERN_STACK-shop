import React, {Component} from 'react';

import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';

class LoginContainer extends Component{

	render(){
		return(
			<div>
				<Login/>
				<Registration/>
			</div>
		);
	}

}

export default LoginContainer;