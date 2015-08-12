'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	authorName: {
		type: String,
		required: true
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	},
	answered: {
		type: Boolean,
		required: true,
		default: false
	},
	answersCount: {
		type: Number,
		required: true,
		default: 0
	}
});

module.exports = mongoose.model('Question', QuestionSchema);
