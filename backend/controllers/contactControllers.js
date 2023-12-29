const Contact = require('../models/contactModel');
const { paginate } = require('mongoose-paginate');


// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().populate('customer','name');
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.getAllContacts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  
  try {
    const contacts = await Contact.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('customer', 'name')
    
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single contact with customer name
exports.getContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id).populate('customer', 'name');
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addContact = async (req, res) => {
    const contact = new Contact(req.body);
    try {
      const newContact = await contact.save();
      res.status(201).json(newContact);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Update a contact
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { customer, name, email, phone, jobTitle, department, notes } = req.body;
  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { customer, name, email, phone, jobTitle, department, notes },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
