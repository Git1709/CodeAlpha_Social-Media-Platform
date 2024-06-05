const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Create Comment
router.post('/', async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
