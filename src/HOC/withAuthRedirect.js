import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';



export let withAuthRedirect = (Component) =>{
	let mapStateToPropsForRedirect = (state) =>{
		return {
			isAuth:state.auth.isAuth,
		}
	}

	class RedirectComponent extends React.Component{
		render(){
			if (!this.props.isAuth) return <Redirect to={'/login'} />;
			return <Component {...this.props}/>
		}
	}
	
	let AuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
	return AuthRedirectComponent;
	
}

