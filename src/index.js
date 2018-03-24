// Importing base React
import React from 'react';
import ReactDOM from 'react-dom';

// Loading in Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Importing Main view
import Main from './components/Main';

// Importing service worker
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return(
            <MuiThemeProvider>
                <Main />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
