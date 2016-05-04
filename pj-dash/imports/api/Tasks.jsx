import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
}

Meteor.methods({
	
	'tasks.insert'(text) {
		check(text, String);

		Tasks.insert({
			text,
			createdAt: new Date(),
		});
	},

});