const Contact = require('../models/contactModel');
const Customer = require('../models/customerModels')

// // Get all contacts
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().populate(
//       {
//         path:"customer",
//         select:["_id","name"]
//       }
//     );
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().populate('customer', 'name');
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new contact
// exports.addContact = async (req, res) => {
//   const contact = new Contact(req.body);
//   try {
//     const newContact = await contact.save();
//     res.status(201).json(newContact);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get a specific contact by ID
// exports.getContact = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const contact = await Contact.findById(id);
//     if (!contact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }
//     res.json(contact);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a contact
// exports.updateContact = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedContact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }
//     res.json(updatedContact);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a contact
// exports.deleteContact = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedContact = await Contact.findByIdAndDelete(id);
//     if (!deletedContact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }
//     res.json({ message: 'Contact deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// exports.fetchContacts = async () => {
//   try {
//     const contacts = await Contact.find().populate('customer');
//     contacts.forEach(contact => {
//       const customerName = contact.customer.name;
//       console.log(customerName);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };


// Get all contacts with customer names
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().populate('customer','name');
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     const populatedContacts = await Promise.all(
//       contacts.map(async (contact) => {
//         const customer = await Customer.findById(contact.customer);
//         const customerName = customer ? customer.name : 'Unknown'; 
//         const { _id, ...contactData } = contact.toObject(); // Exclude the _id field from the contact data
//         return { ...contactData, customerName }; // Return the contact data with the customer name
//       })
//     );
//     res.json(populatedContacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    const populatedContacts = await Promise.all(
      contacts.map(async (contact) => {
        const customer = await Customer.findById(contact.customer);
        const customerName = customer ? customer.name : 'Unknown'; 
        const contactData = { ...contact.toObject(), customerName }; // Include the _id field in the contact data
        return contactData; // Return the contact data with the customer name
      })
    );
    res.json(populatedContacts);
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

// Create a new contact
exports.addContact = async (req, res) => {
  const { customer, name, email, phone, jobTitle, department, notes } = req.body;
  try {
    const contact = new Contact({
      customer,
      name,
      email,
      phone,
      jobTitle,
      department,
      notes
    });
    await contact.save();
    res.status(201).json(contact);
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
