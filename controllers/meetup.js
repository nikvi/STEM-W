/*

get meet up
*/
var meetup = require('meetup-api')('');

exports.getMeetUp = function(req, res) {
	meetup.getEvents({'group_urlname' : 'NodeJS-Argentina'}, function(err,events) {
  		res.render('meetUp', {
  			title: 'Meetup',
    		meetups: events
  		});
	});
  
};
