import React from "react";
import Layout from "./Company/components/Layout"
import GlobalStyles from "./styles"
import {FormModalProvider} from "./Company/context/FormModalContext"
import {EditingCompanyProvider} from "./Company/context/EditingCompanyContext"

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import FeedCompany from './pages/company/feed'
import PostCompany from './pages/company/post'
import EditCompany from './pages/company/edit'

import FeedProvider from './pages/provider/feed'
import PostProvider from './pages/provider/post'
import EditProvider from './pages/provider/edit'

export default function App(){

  return(
    <Route>
      <Switch>
        <Route path="/feed" component={FeedCompany}/>
        <Route path="/post" component={PostCompany}/>
        <Route path="/edit" component={EditCompany}/>

        <Route path="/feed" component={FeedProvider}/>
        <Route path="/post" component={PostProvider}/>
        <Route path="/edit" component={EditProvider}/>
      </Switch>
    </Route>
  );
}
