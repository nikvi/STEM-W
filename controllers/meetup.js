/*

get meet up
*/
var request = require('superagent')
  , util = require('util');

var APIRequest = function(endpoint, params, callback) {
  var self = this;
  // insert meetupAPIkey
  params.key = '531c185a3220c174d247c7e164e3249';
  // supply url vars
  var url = endpoint.resource
    , url_vars = endpoint.resource.match(/\/:\w+/g) || [];
  url_vars.forEach(function(url_var){
    url = url.replace(url_var, '/' + params[url_var.substr(2)]); 
  });
  // generate request
  var req = request(endpoint.method, url)
            .query(params)
            .set('Accept', '*/*')
            .set('User-Agent', 'Meetup API lib for Node.js (2)')
            .buffer(true)
            .end(function(res){
              if(!Object.keys(res.body).length) {
                callback(res.error, JSON.parse(res.text));
              } else {
                callback(res.error, res.body);
              }
            });
};

exports.getMeetUp = function(req, res) {
	APIRequest({ "resource": "https://api.meetup.com/recommended/groups", "method": "get"},{'desc' : 'tech, women'}, function(err,events) {
  		var value = events;
      res.render('meetUp', {
  			title: 'MeetUps',
    		meetups: events
  		});
	});
  
};
