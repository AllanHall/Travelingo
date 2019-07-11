import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Accounts from './pages/Accounts'
import Splash from './pages/Splash'
import Login from './pages/Login'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/home" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/register/:id" exact component={Accounts} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Layout>
    )
  }
}
