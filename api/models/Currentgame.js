/**
 * Currentgame.js
 *
 * @description :: Defines the attributes of an on-going attraction
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    game  : { model: 'game'},
    users : { collection : 'user'},
    startsAt  : { type: 'date' },
    endsAt  : { type: 'date'}
  }
};
