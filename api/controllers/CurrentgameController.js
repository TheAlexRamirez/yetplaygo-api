/**
 * CurrentgameController
 *
 * @description :: Server-side logic for managing currentgames
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//Subscribing to the 'feed' room
  subscribe: function(req, res) {
    if( ! req.isSocket) {
      return res.badRequest("You are not a Socket");
    }

    sails.sockets.join(req.socket,'feed',function(err) {
	    if (err) {
	      return res.serverError(err);
	    }

	    return res.json({
	      message: 'Subscribed to a fun room called feed!'
	    });
		});
  },

	//Subscribing to the 'feed' room
  random: function(req, res) {
			User.find({limit:2}).exec(function (err, users){
			  if (err) {
			    return res.serverError(err);
			  }
				Game.find().exec(function (err, games){
				  if (err) {
				    return res.serverError(err);
				  }
					var random = randomInt(0,games.length)
					//Creating a random current game
					Currentgame.create({
						game  : games[random],
				    users : users,
				    startsAt  : Date(),
				    endsAt : Date()
						}).exec(function (err, result){
							  if (err) { return res.serverError(err); }
							  return res.ok();
					});
				  //return res.json(usersNamedFinn);
				});
		  });
	}
};

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
