import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Days = new Mongo.Collection('days');

var day = 86400000;

if (Meteor.isServer) {
	Meteor.publish('days', function tasksPublication() {
		return Days.find()
	});
}

Meteor.methods({

	'days.insert'(taskId, seconds) {
		var date = new Date();
		var currentDay = Math.floor(date.getTime()/day).toString(16);

		var pad = "000000000000000000000000";
		var oHex = pad.substring(0, pad.length - currentDay.length) + currentDay;

		var docId = new Mongo.Collection.ObjectID(oHex);
		Days.upsert(
			docId,
		{
			_id: docId,
			date: new Date(),
			tasks: 
			[
				{
					_id: taskId,
					seconds:  seconds,
				}
			]
		});
	},
});