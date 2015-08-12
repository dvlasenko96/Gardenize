'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	authorName: {
		type: String,
		required: true
	},
    questionId:  {
        type: String,
		required: true
    },
	answerText: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Answer', AnswerSchema);
