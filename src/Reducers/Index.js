import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { posts, postsFilter } from './Posts';
// import comments from './comments';


// function currentPost(state = {}, action) {
//     // console.error("El post cambio");
//     // console.error(action);
//     switch (action.type) {
//         case 'VIEW_POST':
//             // console.error(action);

//             // return action.id;
//             // console.error(store.getState());
//             return state.currentPost = action.allPosts.find(product => product.id == action.post.id);

//             break;
//         default:
//             return state
//     }

//     return state;
// }



const allReducers = {
    // currentPost,
    posts,
    postsFilter,
    // comments,
    routing: routerReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;
