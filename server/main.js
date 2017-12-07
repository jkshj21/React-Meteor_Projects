import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';

Meteor.startup(() => {
  let now = new Date();

  console.log(now);
  WebApp.connectHandlers.use((req,res,next) =>{
    const _id = req.url.slice(1);
    const link = Links.findOne({_id});

    if (link){
      res.statusCode = 302;
      res.setHeader('Location', link.url)
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next()
    }
  })

  WebApp.connectHandlers.use((req, res, next) => {
    console.log("this is from my custom middleware")
    console.log(req.url, req.method, req.headers, req.query)

    // res.statusCode = 404;//set http request
    // res.setHeader('my-custom-header', 'Joo was here!');// set http headers
    // res.write('<h1> this is my middleware at work! </h1>'); //set http body
    // res.end(); //End http request


    next();
  })
  // code to run on server at startup
  // const employees = new SimpleSchema({
  //   name: {
  //     type:String,
  //     min:1,
  //     max:200
  //   },
  //   hourlywage:{
  //     type:Number,
  //     min: 0
  //   },
  //   email:{
  //     type:String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });

//   Accounts.validateNewUser((user) => {
//     const email = user.emails[0].address
//
//     try{
//       new SimpleSchema({
//         email:{
//           type:String,
//           regEx:SimpleSchema.RegEx.Email
//         }
//       }).validate({email})
//     } catch(e){
//       throw new Meteor.Error(400, e.message)
//     }
//     return true;
// });

});
