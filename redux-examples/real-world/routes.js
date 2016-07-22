import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import Test from './containers/Test'

export default (
  <Route path="/" component={App}>
    <Route path="/github/:login/:name"
           component={RepoPage} />
    <Route path="/github/:login"
           component={UserPage} />
    <Route path="/test"
           component={Test} />
  </Route>
)
