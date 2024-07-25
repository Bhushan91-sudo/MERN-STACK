const express = require('express');
const router = express.Router();
const { addComment, editComment, deleteComment } = require('../controllers/commentController');
const authMiddleware = require('../middleware/auth');

router.post('/:postId', authMiddleware, addComment);
router.put('/:commentId', authMiddleware, editComment);
router.delete('/:commentId', authMiddleware, deleteComment);

module.exports = router;
