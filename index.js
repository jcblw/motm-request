
/*
 * Request Module Demo
 */

var request = require('request'),
	util = require('util'),
	events = require('events'),
	opts = { depth : 3, colors : true },
	dotenv = require('dotenv')().load(),
	key = process.env.TUMBLR_KEY,
	postCount = 1,
	host = 'moustair.tumblr.com',
	flag = process.argv[2],
	endpoint = 'http://api.tumblr.com/v2/blog/' + 
		host + 
		'/posts/photo?' + 
		'total_post=' +
		postCount + 
		'&api_key=' + 
		key;

function streamDemo ( ) {
	console.log("Starting Stream Demo");
	request.get(endpoint).pipe( process.stdout );
}

function demo ( ) { 
	console.log("Starting Demo");
	request.get( endpoint, function ( err, req, body ) {
		console.log( util.inspect( JSON.parse(body), opts ) );
	} );
}

if ( flag === 'stream' ){
	streamDemo( );
	return
}

demo( );


