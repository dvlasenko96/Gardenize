'use strict';

var _ = require('lodash');
var async = require("async");
var Answer = require('./answer.model');
var Question = require('../question/question.model');

// Get list of answers
exports.index = function(req, res) {
	var query = {
		questionId: req.params.questionId
	};
	Answer.find(query, function(err, answers) {
		if (err) {
			return handleError(res, err);
		}
		return res.status(200).json(answers);
	});
};

// Get a single answer
exports.show = function(req, res) {
	Answer.findById(req.params.id, function(err, answer) {
		if (err) {
			return handleError(res, err);
		}
		if (!answer) {
			return res.status(404).send('Not Found');
		}
		return res.json(answer);
	});
};

// Creates a new answer in the DB.
exports.create = function(req, res) {
	var query = {
		authorName: req.body.authorName,
		answerText: req.body.answerText,
		questionId: req.params.questionId
	};
	
	Answer.create(query, function(err, answer) {
		if (err) {
			return handleError(res, err);
		}
		async.waterfall([function(clb) {
				Question
					.findById(req.params.questionId, function(err, question) {

						if (!question) {
							return res.status(404).send('Not Found');
						}

						question.answered = true;
						question.answersCount++;
						question.save(clb);
					})
			}
		], function(err, data) {
			if (err) {
				return handleError(res, err);
			}
			return res.status(201).json(answer);
		});
	});
}

// Updates an existing answer in the DB.
exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Answer.findById(req.params.id, function(err, answer) {
		if (err) {
			return handleError(res, err);
		}
		if (!answer) {
			return res.status(404).send('Not Found');
		}
		var updated = _.merge(answer, req.body);
		updated.save(function(err) {
			if (err) {
				return handleError(res, err);
			}
			return res.status(200).json(answer);
		});
	});
};

// Deletes a answer from the DB.
exports.destroy = function(req, res) {
	Answer.findById(req.params.id, function(err, answer) {
		if (err) {
			return handleError(res, err);
		}
		if (!answer) {
			return res.status(404).send('Not Found');
		}
		answer.remove(function(err) {
			if (err) {
				return handleError(res, err);
			}
			return res.status(204).send('No Content');
		});
	});
};

function handleError(res, err) {
	return res.status(500).send(err);
}
