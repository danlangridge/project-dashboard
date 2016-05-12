import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
	Meteor.publish('tasks', function tasksPublication() {
		return Tasks.find()
	});
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