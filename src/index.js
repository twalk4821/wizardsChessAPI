import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import Root from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
	  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	    <Root />
	  </MuiThemeProvider>
);	

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
