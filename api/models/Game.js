/**
 * Game.js
 *
 * @description :: Defines the attributes of an attraction inside an amusement park.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {
    name  : { type: 'string', unique: true },
    capacity     : { type: 'integer' },
    duration  : { type: 'integer'}
  },
  seedData:[
    {
      name: 'Hurricane',
      capacity: 10,
      duration : 15
    },
    {
      name: 'Medusa',
      capacity: 15,
      duration : 25
    },
    {
      name: 'Hurricane Harbor',
      capacity: 20,
      duration : 8
    },
    {
      name: 'Toxic Roller',
      capacity: 15,
      duration : 20
    }
  ]

};
