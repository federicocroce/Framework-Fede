import React from 'react';
import ReactDOM from "react-dom";
// import './App.css';

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import { store, history } from '../Config/Store.js'

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

// import App from './App';
// import Contact from './contact';


// import Tab from './Tab';


// import Main from './Main';
// import App from './components/App';
import Home from './Home';
// import Single from './Single';
// import PhotoGrid from './PhotoGrid';


/*ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={Home}></Route>

        </div>

      </ConnectedRouter>
    </Provider>

  </MuiThemeProvider>
  ,
  document.getElementById('root')
);*/

/*ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={Home}></Route>
          </div>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );

export default Index;*/





/*export default class Index extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (

        <MuiThemeProvider>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <div>
                <Route path="/" component={Home}></Route>
              </div>
            </ConnectedRouter>
          </Provider>
        </MuiThemeProvider>

    )
  }
} */



const Index = () => {

// export default class Index extends React.Component {
//   constructor() {
//     super()
//   }

  // render() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={Home}></Route>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  // }
} 

export default Index;
