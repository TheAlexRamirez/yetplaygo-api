/**
 * Users.js
 *
 * @description :: User representation
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    encryptedPassword: {
       type: 'string'
     },
    role  : { type: 'string' , enum : ['user','admin']},
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.encryptedPassword;
      return obj;
    }
  },
  // Here we encrypt password before creating a User
  beforeCreate : function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err) return next(err);
        values.encryptedPassword = hash;
        next();
      })
    })
  },
  comparePassword : function (password, user, cb) {
   bcrypt.compare(password, user.encryptedPassword, function (err, match) {
     if(err) cb(err);
       if(match) {
         cb(null, true);
       } else {
         cb(err);
       }
     })
   },
   /*generateSalt : function(password) {
     bcrypt.genSalt(10, function (err, salt) {
       if(err) return next(err);
       bcrypt.hash('yetplaygo', salt, function (err, hash) {
         if(err) return next(err);
         values.encryptedPassword = hash;
         next();
       })
     })
   }*/
   seedData:[
     {
       email: 'admin@yetplaygo.com',
       password : 'yetplaygo',
       role : 'admin'
     },{
       email: 'admin2@yetplaygo.com',
       password : 'yetplaygo',
       role : 'admin'
     },
     {
       email: 'user@yetplaygo.com',
       password : 'yetplaygo',
       role : 'user'
     },
     {
       email: 'user2@yetplaygo.com',
       password : 'yetplaygo',
       role : 'user'
     }]
};

module.exports = User;
