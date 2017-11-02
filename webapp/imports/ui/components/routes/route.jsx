import { Meteor } from 'meteor/meteor'

import React from 'react'
import { Switch, Route } from 'react-router'
import { Redirect } from 'react-router-dom'

import Home from '../home.jsx'
import Login from '../user/login.jsx'
import UserProfile from '../user/user-profile.jsx'

export default class Routes extends React.Component {
  constructor (props) {
    super(props)
  }

  loginGuard () {
    return Meteor.userId() ? (<Redirect to='/' />) : (<Login />)
  }

  userProfileGuard() {
    return Meteor.userId() ? (<UserProfile/>) : (<Redirect to='/login'/>)
  }

  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={this.loginGuard} />
        <Route path='/profile' component={this.userProfileGuard}/>
      </Switch>
    )
  }
}
