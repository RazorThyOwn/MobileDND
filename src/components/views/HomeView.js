// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Importing icons
import Home from 'material-ui/svg-icons/action/home';

// Importing CSS
import '../../css/HomeView.css';

export default class PrimaryView extends React.Component {

    render() {

        if (this.props.index !== this.props.active_index) {
            return (<div />)
        }

        return(
            <div className = "homeViewHolder">
                <div className = "viewTitle">
                    <Home className = "viewTitleIcon" /> Home
                </div>

                <div className = "home_welcomeBack">Welcome back, {this.props.user_name}</div>

                <div className = "currentGameTitle">
                    You are currently an active participant in the following games:
                </div>

                {this.getCurrentGames()}

                <div className = "pastGameTitle">
                    You were an active participant in the following games:
                </div>

                {this.getPastGames()}
            </div>
        )

    }

    // Function returns all active games in a list format
    getCurrentGames() {

        // TODO: AXIOS Requeset to get information about active games for this user

        let activeGamesList = [];

        let numGames = 0;

        // Axios request
        // Iterating on games

        if (numGames === 0) {
            // No past games :(
            activeGamesList.push(
                <div className = "noPast">You are currently not part of any games</div>
            );
        }

        return activeGamesList;
    }

    // Functions returns all old games in a list format
    getPastGames() {

        // TODO: AXIOS Requeset to get information about old games for this user

        let pastGamesList = [];

        let numGames = 0;

        // Axios request
        // Iterating on games

        if (numGames === 0) {
            // No past games :(
            pastGamesList.push(
                <div className = "noPast">You have not participated in any games</div>
            );
        }

        return pastGamesList;
    }
}