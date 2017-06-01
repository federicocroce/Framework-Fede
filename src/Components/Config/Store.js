import React from 'react';
import { createStore, applyMiddleware} from "redux";
// import { push, replace, go, goBack, goForward,} from 'react-router-redux';

// import thunk from "redux-thunk";
import {routerMiddleware } from "react-router-redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import  reducer from "../../reducers/Index";
// import {comments, posts} from "./Data/data"

// const defaultStore = {
//     posts:{
//         allPosts: posts,
//         currentPost: {}
//     },
//     comments
// }

// console.error(defaultStore);

const history = createHistory();
const middleware = routerMiddleware(history);


// const reducers = combineReducers({ ...registerReducer, router: routerReducer });
// const store = createStore(reducers, defaultStore);
const store = createStore(reducer, applyMiddleware(middleware));


export {
    store,
    history
}

