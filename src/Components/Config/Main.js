import React from 'react';

import { Route, Link, Switch, IndexRoute } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../Main/appRoutes.js'
import NavigationF from '../Utilities/NavigationF';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    // const allProps = 

    

    return (

      <div>
        <h1>
          <Link to="/">Welcome to React Router Redux</Link>
        </h1>

        <NavigationF linksRoutes={linksRoutes} data={this.props} />


      </div>
    );
  }
}


export default Main;