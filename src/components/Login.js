// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

// Importing CSS
import '../css/Login.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            local_login: "",
            local_password: "",

            local_login_error: "This input is required",
            local_password_error: "This input is required",

            dialog_open: false,
        }

        // Function binding
        this.handleLoginInput = this.handleLoginInput.bind(this);
    }

    render() {
        return (
            <div>
                <div className = "loginHolder">

                    <div className = "loginInputTopTitle">Login</div>

                    <div className = "loginFieldsHolder">
                        <div className = "loginInputTitle">Username</div>
                        <TextField name = "user" onChange = {(e) => {this.handleLoginInput(e,"user")}} errorText={this.state.local_login_error} value = {this.state.local_login} className = "inputFieldLogin" />

                        <div className = "loginInputTitle">Password</div>
                        <TextField name = "pass" onChange = {(e) => {this.handleLoginInput(e,"pass")}} errorText={this.state.local_password_error} value = {this.state.local_password} type = "password" className = "inputFieldLogin" />
                    </div>

                    <RaisedButton disabled = {this.state.local_login === "" || this.state.local_password === ""} onClick = {() => {this.login()}} className = "loginButton" label = "Login" backgroundColor = {"#2979ff"} labelColor = {"white"}/>
                    <FlatButton disabled = {this.state.local_login === "" || this.state.local_password === ""} onClick = {() => {this.createAccount()}} className = "loginButton" label = "Create Account" backgroundColor = {"#2979ff"} labelColor = {"white"}/>

                    <Dialog
                        title = "Invalid account credentials"
                        actions = {[
                            <FlatButton onClick = {() => this.createAccount()} style = {{marginRight: "15px"}} backgroundColor = {"#2979ff"} labelColor = {"white"} label = "Create Account" />,
                            <FlatButton backgroundColor = {"#2979ff"} labelColor = {"white"} label = "Close" onClick = {() => {this.setState({dialog_open: false})}}/>
                        ]}
                        open = {this.state.dialog_open}
                    >
                        <div className = "missingCredentialsTitle">We were unable to find an account with those credentials</div>
                        <div className = "loginMissingInfo">This is likely due to misspelling of either the username or password. If you believe the information to be correct, you
                            may continue with the following steps</div>
                        <div className = "loginMissingTitle">● Create an account with the given credentials</div>
                        <div className = "loginMissingInfo">You may use the credentials provided to create a new account and continue. Note that if this username is already taken you will
                            be unable to continue</div>
                        <div className = "loginMissingTitle">● Reset Account Password</div>
                        <div className = "loginMissingInfo">You may reset the account password by emailing the administrator at awalexweber99@gmail.com.</div>
                        <div className = "loginMissingTitle">● Retry my credentials</div>
                        <div className = "loginMissingInfo">You may re-enter your account credentials</div>
                    </Dialog>
                </div>
            </div>
        );
    }

    // Handles changes on the login inputs
    handleLoginInput(event, type) {
        let value = event.target.value;

        if (type === "pass") {
            // Updating password
            if (value.length <= 0) {
                this.setState({local_password_error: "This input is required", local_password: value});
            }
            else {
                this.setState({local_password_error: "", local_password: value});
            }
        }

        else if (type === "user") {
            // Updating password
            if (value.length <= 0) {
                this.setState({local_login_error: "This input is required", local_login: value});
            }
            else {
                this.setState({local_login_error: "", local_login: value});
            }
        }
    }

    // Function deals with loading accounts in
    login() {

        // TODO:
        // AXIOS Request to database to search for password
        let auth_token = "123";

        // We have retrieved information regarding this account
        // Check to see if got valid account information
        if (auth_token === null) {
            // Opening the dialog box
            this.setState({dialog_open: true});
        }

        else {
            // Sweet, valid account credentials!
            // Lets set this in the main view and load into the next page
            this.props.handleLoginCallback(this.state.local_login, auth_token);
        }
    }

    createAccount() {
        // Closing dialog
        this.setState({dialog_open: false});

        // Creating a new account...
        let auth_token = null;

        // Okay we have created the new account!
        // We should now load the new account data into the system and load the next page

        if (auth_token === null) {
            // Username already taken, thats too bad

            // TODO: Turn alert into Dialog for better user experience
            alert("That username is already taken!");
        }
        else {
            this.props.handleLoginCallback(this.state.local_login, auth_token);
        }
    }
}