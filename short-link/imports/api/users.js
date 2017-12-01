import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {Account} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;

  new SimpleSchema({
    email:{
      type:String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({email})

  return true;
});
