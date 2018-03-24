// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Loading extended scenes
import Toolbar from './Toolbar';
import Login from './Login';
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
        }
    }

    render() {
        if (this.state.token === "" || this.state.user_name === "") {
            return (
                <div className = "loginScreenHolder">
                    <img className = "loginBackgroundImage" src = {background} />
                    <Toolbar />
                    <Login />
                    <BottomBar />
                </div>
            );
        }
    }
}