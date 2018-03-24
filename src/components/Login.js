// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Importing CSS
import '../css/Login.css';

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <div className = "loginHolder">

                    <div className = "loginInputTopTitle">Login</div>

                    <div className = "loginFieldsHolder">
                        <div className = "loginInputTitle">Username</div>
                        <TextField className = "inputFieldLogin" name = "user_name"/>

                        <div className = "loginInputTitle">Password</div>
                        <TextField type = "password" className = "inputFieldLogin" name = "password"/>
                    </div>

                    <RaisedButton className = "loginButton" label = "Login" backgroundColor = {"#2979ff"} labelColor = {"white"}/>
                    <RaisedButton className = "loginButton" label = "Create Account" backgroundColor = {"#2979ff"} labelColor = {"white"}/>
                </div>
            </div>
        );
    }
}