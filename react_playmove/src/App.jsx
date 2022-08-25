import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from "react-router"

import FeedCompany from './pages/company/feed/feed'
import PostCompany from './pages/company/post/post'
import EditCompany from './pages/company/edit/edit'

import FeedProvider from './pages/provider/feed/feed'
import PostProvider from './pages/provider/post/post'
import EditProvider from './pages/provider/edit/edit'

import index from "./pages";

export default function App(){

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={index}/>

        <Route path="/feedCompany" component={FeedCompany}/>
        <Route path="/postCompany" component={PostCompany}/>
        <Route path="/editCompany/:id" component={EditCompany}/>

        <Route path="/feedProvider" component={FeedProvider}/>
        <Route path="/postProvider" component={PostProvider}/>
        <Route path="/editProvider/:id" component={EditProvider}/>
      
      </Switch>
    </Router>
  );
}
