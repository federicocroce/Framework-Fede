import React from 'react';
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

// import App from './components/App';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';
// import RaisedButton from 'material-ui/RaisedButton';
import postsGrid from './PostsGrid';

// import Owner from './Owner';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <h1>
          <Link to="/">Venta/Alquier Inmuebles</Link>
        </h1>
        <NavigationBar linksRoutes={linksRoutes} />
        {/*<RaisedButton label="Default" />*/}
        <postsGrid/>
      </div>
    );
  }
}

export default Home;