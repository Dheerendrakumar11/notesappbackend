const Note = require('../models/Note');

// Create a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        if (!title) return res.status(400).json({ message: 'Title is required.' });

        const note = await Note.create({
            user: req.user.id,
            title,
            content,
            category,
        });

        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get all notes for the logged-in user
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get a single note by ID
exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, user: req.user.id });

        if (!note) return res.status(404).json({ message: 'Note not found' });

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Update a note
exports.updateNote = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        const note = await Note.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { title, content, category, updatedAt: new Date() },
            { new: true, runValidators: true }
        );

        if (!note) return res.status(404).json({ message: 'Note not found' });

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a note
exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!note) return res.status(404).json({ message: 'Note not found' });

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
