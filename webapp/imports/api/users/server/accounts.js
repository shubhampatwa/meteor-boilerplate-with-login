import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// Restrict account creation from client side
Accounts.config({forbidClientAccountCreation: true})

Accounts.onCreateUser((options, user) => {
  console.log('[Accounts.onCreateUser] - ', user._id)
  return user
})
