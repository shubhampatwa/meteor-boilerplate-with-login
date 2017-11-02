import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Match } from '../custom-check'


const User = new SimpleSchema({
  emails: {
    type: Array,

    // For accounts-password, either emails or username is required, but not both.
    // It is OK to make this optional here because the accounts-password package does
    // its own validation. Third-party login packages may not require either.
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) return new Date()
      if (this.isUpsert) return {$setOnInsert: new Date()}
      this.unset()
    }
  },
  updatedAt: {
    type: Date,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
});

Meteor.users.attachSchema(User)

Meteor.users.deny({
  insert () { return true },

  update () { return true },

  remove () { return true }
})
