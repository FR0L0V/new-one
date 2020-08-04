import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Main from './Components/Main/Main';
import {connect} from 'react-redux';
import {getUserDataThunkCreator} from './Redux/authReducer';
import Preloader from './Components/OptionalComponents/Preloader';
import {Initialize} from './Redux/appReducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './Redux/redux-store';

class App extends React.Component{
	
	
	render=()=>{

			return (
			<div className='app-wrapper'>
				rtretert
			</div>
			);
	}
}

let mapStateToProps = (state) =>{
	return {
		initialized:state.app.initialized
	}
}

//export default connect( mapStateToProps,{getUserDataThunkCreator, Initialize})(App);
let AppContainer = connect( mapStateToProps,{getUserDataThunkCreator, Initialize})(App);

let MainApp = (props) =>{
	return(
	<div>
	dskfjhsdfgjhfdg
		
	</div>
	)
}

export default MainApp;