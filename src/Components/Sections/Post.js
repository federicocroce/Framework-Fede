import React from 'react';

import { NavLink, Route, Switch } from 'react-router-dom';

import { connect } from "react-redux";

// import Single from './Single';
import { viewPost } from '../../actions/actionsCreator';

const Post = (props) => {

  // console.log(props);
  // console.error("Photo");
  console.error(props.object.display_src);
  return (
    <NavLink className="main-obj" to={'/view'} onClick={() => props.viewPost(props.object)}>
      <img src={props.object.display_src} alt="Smiley face" height="100" width="100"/>
      {/*<Link to={`/view/${props.object}`}>*/}

      {/*<NavLink to={'/view'} onClick={() => props.viewPost(props.object)}>*/}
        <p>{props.object.likes}</p>        
      {/*</NavLink>*/}
      <p>{props.object.type}</p>
      {/*<Switch>*/}
      {/*<Route path="/view" component={Single} ></Route>*/}
      {/*</Switch>*/}


      {/*<button onClick={() => props.viewPost(props.object)}> VIEW</button>*/}

    </NavLink>
  );

}

/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  // console.log("state");
  // console.log(state);
  return {
    currentPost: state.posts.currentPost
  };
}


const mapDispatchToProps = dispatch => {
  return {
    viewPost(currentPost) {
       dispatch(viewPost(currentPost));
    }
  };
}


/*
* Dispatch de las acciones
*/

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);