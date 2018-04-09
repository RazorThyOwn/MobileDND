// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Importing MaterialUI
import RaisedButton from 'material-ui/RaisedButton';

// Importing icons
import Create from 'material-ui/svg-icons/content/create';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

// Importing CSS
import '../../css/EventManagementView.css';

export default class PrimaryView extends React.Component {

    render() {

        if (this.props.index !== this.props.active_index) {
            return (<div />)
        }

        return(
            <div className = "homeViewHolder">
                <div className = "viewTitle">
                    <Create className = "viewTitleIcon" /> Event Management
                </div>

                <RaisedButton className = "createEventButton" label = "Create New Event" backgroundColor = {"#2979ff"} labelColor = {"#ffffff"} icon = {<AddCircle/>} />
            </div>
        )
    }
}