import React from 'react';

import { connect } from "react-redux";


const PostDetail = (props) => {
  console.error(props);
  return (
    <div>
      <h1>Post</h1>
      {JSON.stringify(props.currentPost)}
    </div>
  );
}


const mapStateToProps = (state) => {
  // console.log("state");
  // console.log(state);
  return {
    currentPost: state.posts.currentPost
  };
}


// const mapDispatchToProps = dispatch => {
//   return {
//     viewPost(currentPost) {
//        dispatch(viewPost(currentPost));
//     }
//   };
// }


/*
* Dispatch de las acciones
*/

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
  mapStateToProps,
  null
)(PostDetail);
