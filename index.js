
/*
 * Request Module Demo
 */

var request = require('request'),
	util = require('util'),
	opts = { depth : 3, colors : true },
	dotenv = require('dotenv')().load(),
	key = process.env.TUMBLR_KEY,
	postCount = 5,
	host = 'moustair.tumblr.com',
	endpoint = 'http://api.tumblr.com/v2/blog/' + 
		host + 
		'/posts/photo?' + 
		'total_post=' +
		postCount + 
		'&api_key=' + 
		key;


	request.get( endpoint, function ( err, req, body ) {
		//console.log( util.inspect( req, opts ) );
		console.log( util.inspect( JSON.parse(body), opts ) );
	} );

