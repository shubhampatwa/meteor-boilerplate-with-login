import { Meteor } from 'meteor/meteor'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { Card, CardTitle, CardActions } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import TextField from 'material-ui/TextField'
import { red500 } from 'material-ui/styles/colors'

import RegexHelper from '../../helpers/regex-helper'

const styles = {
  card: {
    margin: '11% auto 0',
    maxWidth: 500,
    width: '92%'
  },
  input: {
    width: '100%'
  },
  loginError: {
    padding: 8,
    color: red500,
    margin: 0,
    float: 'left'
  }
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEmailValid: false,
      isPasswordValid: false,
      passwordErrorText: '',
      loginError: '',
      emailErrorMsg: ''
    }
  }

  keyDown (e) {
    // For new material version
    e.persist()
    if (e.keyCode === 13) this.handleLogin()
  }

  validateEmail () {
    let email = this.email.getValue()
    const isEmailEmpty = !email.trim()
    const emailErrorMsg = isEmailEmpty ? 'Email is required' : (
                          !RegexHelper.isEmail(email) ? 'Email is not valid' : '')
    this.setState({
      emailErrorMsg,
      isEmailValid: !emailErrorMsg
    })
  }

  validatePassword () {
    const isPasswordValid = !!(this.password.getValue().trim())
    this.setState({
      passwordErrorText: !isPasswordValid && 'Password required',
      isPasswordValid: isPasswordValid
    })
  }

  handleLogin () {
    this.validateEmail()
    this.validatePassword()
    const {isEmailValid, isPasswordValid} = this.state
    if (!isEmailValid || !isPasswordValid) return

    Meteor.loginWithPassword(this.email.getValue(), this.password.getValue(), (err) => {
      console.log(err);
      if (err) {
        this.setState({loginError: 'Invalid user or password'})
      } else {
        this.context.router.history.push('/profile')
      }
    })
  }

  render () {
    const {passwordErrorText, loginError, emailErrorMsg} = this.state

    return (
      <div>
        <Card style={styles.card} >
          <CardTitle title='Ethereum' subtitle='User Login' />
          <div style={{margin: 16}} tabIndex='0' onKeyDown={(e) => this.keyDown(e)}>
            <TextField
              style={styles.input}
              ref={(ref) => this.email = ref}
              hintText='Email'
              errorText={emailErrorMsg}
              type='text'
              onChange={() => this.validateEmail()} />
            <br />
            <TextField
              style={styles.input}
              ref={(ref) => this.password = ref}
              hintText='Password'
              type='password'
              errorText={passwordErrorText}
              onChange={() => this.validatePassword()} />
            <br />
          </div>
          <CardActions style={{textAlign: 'right'}}>
            { loginError && <p style={styles.loginError}>{loginError}</p> }
            <RaisedButton
              label='Log in'
              onTouchTap={() => this.handleLogin()}
              primary
            />
          </CardActions>
        </Card>
      </div>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Login
