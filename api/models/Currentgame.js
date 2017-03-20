/**
 * Currentgame.js
 *
 * @description :: Defines the attributes of an on-going attraction
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {

    game  : { model: 'game'},
    users : { collection : 'user'},
    startsAt  : { type: 'date' },
    endsAt  : { type: 'date'}
  },

  afterCreate: function(entry, cb) {
    sails.sockets.broadcast('feed', 'new_entry', entry);
    console.log(entry);
    cb();
  }
};
