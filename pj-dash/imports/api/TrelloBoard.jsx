import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Trello from 'trello';
import { HTTP } from 'meteor/http';

var users =  Mongo.users;
var accountConfig =  Mongo.meteor_accounts_loginServiceConfiguration;

Meteor.methods({
	'trello.getBoards'() {

		var key = accountConfig.find({ _id: "HBHgTBZP3BzaJoEci" }).consumerKey;
		var user = users.find({ _id: "bz7oNEhfrmQWkXKQB"}).username;
		var token = accountConfig.find({ _id: "HBHgTBZP3BzaJoEci" }).accessToken;

		var URL = "";
		var URL = URL.concat("https://api.trello.com/1/members/", user, "/boards", "?key=", key, "&token=", token);
		var result;
		try {
			result = HTTP.call("GET", URL);
			console.log(result);
		} catch (err) {
			console.log(err);
		}
	}
});