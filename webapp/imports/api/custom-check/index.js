import {check, Match} from 'meteor/check'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

Match.Email = Match.Where(function (x) {
  check(x, String)
  return Boolean(x.match(SimpleSchema.RegEx.Email))
})

export {Match}
