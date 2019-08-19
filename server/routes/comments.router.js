const express = require('express');
const commentRouter = express.Router();

const commentController = require('../controllers/comment.controller');

commentRouter.get('/', commentController.getComments);
commentRouter.post('/', commentController.createComment);
commentRouter.get('/:id', commentController.getCommentById);
commentRouter.get('/theme/:theme', commentController.getCommentByTheme);
commentRouter.put('/:id', commentController.updateComment);
commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;
