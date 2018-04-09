// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Loading extended scenes
import Toolbar from './Toolbar';
import Login from './Login'
import HomeView from './views/HomeView';
import EventManagementView from './views/EventManagementView';
import BottomBar from './BottomBar';

// Importing CSS
import '../css/Main.css';

// Loading image
import background from '../img/background.jpg';


export default class Main extends React.Component {

    constructor(props) {
        super(props);

        // Loading the default state information
        this.state = {
            user_name: "",
            token: "",
            active_index: 0,
        }

        // Binding functions
        this.handleLoginCallback = this.handleLoginCallback.bind(this);
        this.logOut = this.logOut.bind(this);
        this.setActiveIndex = this.setActiveIndex.bind(this);
    }

    // Login Callback function
    handleLoginCallback(new_user_name, new_user_token) {
        this.setState({user_name: new_user_name, token: new_user_token});
    }

    render() {
        if (this.state.token === "" || this.state.user_name === "") {
            return (
                <div className = "loginScreenHolder">
                    <img className = "loginBackgroundImage" src = {background} />
                    <Toolbar />
                    <Login handleLoginCallback = {this.handleLoginCallback} />
                    <BottomBar />
                </div>
            );
        }
        else {
            return (
                <div className = "loginScreenHolder">
                    <Toolbar setActiveIndex = {this.setActiveIndex} logOut = {this.logOut} active_index = {this.state.active_index} token = {this.state.token} user_name = {this.state.user_name} />
                    <HomeView index = {0} active_index = {this.state.active_index} token = {this.state.token} user_name = {this.state.user_name} />
                    <EventManagementView index = {4} active_index = {this.state.active_index} token = {this.state.token} user_name = {this.state.user_name} />
                    <BottomBar />
                </div>
            );
        }
    }

    // Handling logging out
    logOut() {
        this.setState({user_name: "", token: "", active_index: 0});
    }

    // Primary active index functioner
    setActiveIndex(index) {
        this.setState({active_index: index});
    }
}