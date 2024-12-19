const express = require('express');
const { createNote, getNotes, getNoteById, updateNote, deleteNote } = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/notes', protect, createNote);
router.get('/notes', protect, getNotes);
router.get('/notes/:id', protect, getNoteById);
router.put('/notes/:id', protect, updateNote);
router.delete('/notes/:id', protect, deleteNote);

module.exports = router;
