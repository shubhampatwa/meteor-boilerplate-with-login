import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

export const SetDefaultData = () => {
  const users = Meteor.users.find().fetch()
  console.log(users);
  if (!users.length) {
    Accounts.createUser({
      email: 'abc@gmail.com',
      password: 'abc'
    })
  }
}
