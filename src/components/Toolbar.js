// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Material-UI Components
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

// Loading Icons
import Home from 'material-ui/svg-icons/action/home';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Settings from 'material-ui/svg-icons/action/settings';
import VideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import List from 'material-ui/svg-icons/action/list';
import AddToQueue from 'material-ui/svg-icons/av/add-to-queue';
import Create from 'material-ui/svg-icons/content/create';

// Loading Logo
import spectreLogo from '../img/SpectreLogo.png';

// Importing CSS
import '../css/Toolbar.css';

export default class Toolbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.token === undefined || this.props.user_name === undefined) {
            return (
                <div className="toolbarEmpty">
                    <img className="spectreLogo" src={spectreLogo}/>
                </div>
            )
        }

        else {
            return (
                <div className="toolbarEmpty">
                    <img className="spectreLogoSmall" src={spectreLogo}/>
                    <IconMenu
                        className = "toolbarDropMenu"
                        iconButtonElement = {<IconButton><MoreVertIcon className = "toolbarDropMenuIcon"/></IconButton>}
                        anchorOrigin={{horizontal: "right", vertical: "top"}}
                        targetOrigin={{horizontal: "right", vertical: "top"}}
                    >
                        <MenuItem onClick = {() => {this.props.setActiveIndex(0)}} leftIcon = {<Home />} primaryText = "Home" />
                        <Divider />
                        <MenuItem onClick = {() => {this.props.setActiveIndex(1)}} leftIcon = {<VideogameAsset />} primaryText = "Active Game" />
                        <MenuItem onClick = {() => {this.props.setActiveIndex(2)}} leftIcon = {<AddToQueue />} primaryText = "Join Game" />
                        <MenuItem onClick = {() => {this.props.setActiveIndex(3)}} leftIcon = {<List />} primaryText = "Past Games" />
                        <MenuItem onClick = {() => {this.props.setActiveIndex(4)}} leftIcon = {<Create />} primaryText = "Event Management" />
                        <MenuItem onClick = {() => {this.props.setActiveIndex(5)}} leftIcon = {<Settings />} primaryText = "Options" />
                        <Divider />
                        <MenuItem onClick = {() => this.props.logOut()} leftIcon = {<ArrowBack />} primaryText = "Sign-Out" />
                    </IconMenu>
                </div>
            )
        }
    }
}