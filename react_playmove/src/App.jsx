import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from "react-router"

import FeedCompany from './pages/company/feed'
import PostCompany from './pages/company/post'
import EditCompany from './pages/company/edit'

import FeedProvider from './pages/provider/feed'
import PostProvider from './pages/provider/post'
import EditProvider from './pages/provider/edit'

import index from "./pages";

export default function App(){

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={index}/>

        <Route path="/feedCompany" component={FeedCompany}/>
        <Route path="/postCompany" component={PostCompany}/>
        <Route path="/editCompany" component={EditCompany}/>

        <Route path="/feedProvider" component={FeedProvider}/>
        <Route path="/postProvider" component={PostProvider}/>
        <Route path="/editProvider" component={EditProvider}/>
      
      </Switch>
    </Router>
  );
}
