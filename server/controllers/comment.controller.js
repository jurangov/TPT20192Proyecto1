const Comment = require('../models/Comment');
const commentController = {};

commentController.getComments = async (req, res) => {
    const comment = await Comment.find();
    res.json(comment);
}

commentController.createComment = async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.json({
        status: 'Comment created'
    });
}

commentController.updateComment = async (req, res) => {
    const comment = {
        user: req.body.user,
        text: req.body.text,
        theme: req.body.theme
    };
    
    await Comment.findByIdAndUpdate(req.params.id, {$set: comment}, {new: true});
    res.json({
        status: 'Comment updated'
    });
}

commentController.deleteComment = async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Comment deleted'
    });
}

commentController.getCommentById = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
}

commentController.getCommentByTheme = async (req, res) => {
    const comment = await Comment.find({theme:req.params.theme});
    res.json(comment);
}

module.exports = commentController;