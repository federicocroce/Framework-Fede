import React from 'react';

import PostsGrid from '../Sections/PostsGrid';
// import Owner from './Owner';
// import Main from './components/Main';
// import {OwnerConnect, SingleConnect} from './components/App';
// import Agency from './Agency';
import Home from '../Sections/Home';
import NewPost from '../Sections/NewPost';
// import App from './components/App';
// import Tab from './Tab'
import PostDetail from '../Sections/PostDetail'




const mainLinksRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  //   name: "Alquiler/Venta",
  //   exact: true
  // },
  {
    path: "/main",
    component: PostsGrid,
    name: "Todos"
  },
  {
    path: "/sale",
    component: PostsGrid,
    name: "Ventas"
  },
  {
    path: "/rent",
    component: PostsGrid,
    name: "Alquileres"
  },
  ,
  {
    path: "/new",
    component: NewPost,
    name: "Nuevo"
  },
  {
    path: "/view",
    component: PostDetail,
    name: ""
  }
];

// const tabLinksRoutes = [
//   // {
//   //   path: "/owner/PhotoGrid",
//   //   component: PhotoGrid,
//   //   name: "PhotoGrid",
//   //   title:"PhotoGrid"
//   // },
//   {
//     path: "/owner/Tab",
//     component: Tab,
//     name: "Tab",
//     title:"Titulo"
//   },
//   {
//     path: "/owner/Tab",
//     component: Tab,
//     name: "Tab",
//     title:"Titulo"
//   }
// ];


export {
    mainLinksRoutes
    // tabLinksRoutes
}
