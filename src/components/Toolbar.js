// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Loading Logo
import spectreLogo from '../img/SpectreLogo.png';

// Importing CSS
import '../css/Toolbar.css';

export default class Toolbar extends React.Component {

    render() {
        return (
            <div className = "toolbarEmpty">
                <img className = "spectreLogo" src = {spectreLogo} />
            </div>
        );
    }
}