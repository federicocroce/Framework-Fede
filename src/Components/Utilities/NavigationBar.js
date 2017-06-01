import React from 'react';
import { Route, NavLink, Switch, IndexRoute } from 'react-router-dom';
// import AppBar from 'material-ui/AppBar';

// import PhotoGrid from './PhotoGrid'


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    generateLinks = (linksRoutes) => {
        return linksRoutes.map((route, index) => (
            <NavLink key={index} to={linksRoutes[index].path} ><h1> {linksRoutes[index].name}</h1></NavLink>
        ))
    };

    generateRutes = (linksRoutes, data) => {
        return linksRoutes.map((route, index) => {
            return <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} title="Fedeeee" data={data}></Route>
        })
    };


    render() {

        const linksRoutes = this.props.linksRoutes;

        const data = this.props.data;

        // console.error(data);

        return (
            <div>
                {/*<AppBar>*/}
                    {this.generateLinks(linksRoutes)}
                {/*</AppBar>*/}
                {this.generateRutes(linksRoutes, data)}


            </div>
        );
    }
}

export default NavigationBar;
