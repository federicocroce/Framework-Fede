// a reducer takes in two things
// import { store } from '../Store.js'
import { postsResponse } from "../Data/data";

const postsData = {
    allPosts: postsResponse,
    currentPost: {}
}


const posts = (state = postsData, action) => {
    // console.error(action);
    switch (action.type) {
        case 'VIEW_POST':

            return {
                ...state,
                currentPost: action.currentPost
            };
            break;
        default:
            return state
    }
}

// const postsFilter = (state = postsData.allPosts, action) => {
//     // console.error(action);
//     switch (action.type) {
//         case 'SELL_POSTS':
//         return action.posts.filter(post => post.type == "sale")
//         // console.error("Sell");
//         // return {
//         //         ...state,
//         //         allPosts: action.posts.filter(post => post.type == "sale")
//         //     };
//             // return a
//             break;
//         case 'RENT_POSTS':
//         console.error(state);
//              return action.posts.filter(post => post.type == "rent")
//             break;
//         default:
//             return state
//     }
// }

// const sellPosts = (state = postsData, action) => {

//     switch (action.type) {
//         case 'SELL_POST':

//             return action.posts.filter();
//             break;
//         default:
//             return state
//     }
// }

// const rentPosts = (state = postsData, action) => {

//     switch (action.type) {
//         case 'RENT_POST':

//             return {
//                 ...state,
//                 currentPost: action.currentPost
//             };
//             break;
//         default:
//             return state
//     }
// }

// const setCurrentPost = (state = postsData.currentPost, action) => {

//     switch (action.type) {
//         case 'SET_POST':
//             // console.error("El post cambio");
//             // console.error(state);
//             // console.error(action);
//             return state.currentPost = action.currentPost;
//             break;
//         default:
//             return state
//     }
// }




// export { posts, sellPosts, rentPosts };
export { posts };