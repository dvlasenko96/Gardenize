'use strict';

var express = require('express');
var controller = require('./question.controller');
var answerController = require('../answer/answer.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/:questionId/answers', answerController.index);
router.post('/', controller.create);
router.post('/:questionId/answers', answerController.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
