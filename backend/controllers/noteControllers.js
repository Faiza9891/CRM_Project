const Note = require('../models/noteModel');

// Get all notes
const getAllNotes = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  
  try {
    const notes = await Note.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('customer','name').populate('contact','name');
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
const addNote = async (req, res) => {
  const note = new Note(req.body);
  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific note by ID
const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id).populate('customer','name').populate('contact','name');
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a note
const updateNote = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
};
