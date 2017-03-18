/**
 * Game.js
 *
 * @description :: Defines the attributes of an attraction inside an amusement park.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
      name  : { type: 'string', unique: true },
      capacity     : { type: 'integer' },
      duration  : { type: 'integer'}
    }
  }
};
