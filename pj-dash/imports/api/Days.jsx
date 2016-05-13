import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Days = new Mongo.Collection('days');

var day = 86400000;

if (Meteor.isServer) {
	Meteor.publish('days', function tasksPublication() {
		return Tasks.find()
	});
}

Meteor.methods({

	'days.insert'(taskId, seconds) {

		var docId = ObjectId(Math.floor(new Date().now()/day).toString(16));

		Days.insert(
		{
			_id: docId,
			date: new Date(),
			tasks: [
				{
					_id: taskId,
					seconds:  seconds,
				}
			]
		});
	},
});