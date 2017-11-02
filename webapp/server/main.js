import { Meteor } from 'meteor/meteor'
import { SetDefaultData } from './default-data.js'

Meteor.startup(() => {
  // code to run on server at startup
  SetDefaultData()
})
