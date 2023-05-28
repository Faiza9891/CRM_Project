const Contact = require("../models/contactModel")


// Get all contacts for a customer
exports.getAllContacts = async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const contacts = await Contact.find({ customer_id: customerId });
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


 // Get a single contact by ID
 
 exports.getContact =   async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

// Create a new contact for a customer
exports.addContact = async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const { name, email, phone, position } = req.body;
      const contact = new Contact({ customer_id: customerId, name, email, phone, position });
      await contact.save();
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
}  

//update

exports.updateContact = async (req, res) => {
    try {
      const { name, email, phone, position } = req.body;
      const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { name, email, phone, position, updated_at: Date.now() },
        { new: true }
      );
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }

// Delete

exports.deleteContact = async (req, res) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json({ message: 'Contact deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }