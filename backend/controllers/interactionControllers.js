const Interaction = require('../models/interactionModel');



// Get all interactions
// exports.getAllInteractions = async (req, res) => {
//   try {
//     const interactions = await Interaction.find().populate('customer','name');
//     const populatedInteractions = interactions.map((interaction) => {
//       const customerName = interaction.customer ? interaction.customer.name : 'Unknown';
//       const interactionData = { ...interaction.toObject(), customerName };
//       return interactionData;
//     });
//     res.json(populatedInteractions);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// exports.getAllInteractions = async (req, res) => {
//   try {
//     const interactions = await Interaction.find().populate('customer', 'name');
//     const populatedInteractions = interactions.map((interaction) => {
//       const customerName = interaction.customer && interaction.customer.length > 0 ? interaction.customer[0].name : 'Unknown';
//       const interactionData = {
//         ...interaction.toObject(),
//         customerName
//       };
//       return interactionData;
//     });
//     res.json(populatedInteractions);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.getAllInteractions = async (req, res) => {
  try {
    const interactions = await Interaction.find().populate('customer', 'name');
    res.json(interactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get a specific interaction by ID
exports.getInteraction = async (req, res) => {
  const { id } = req.params;
  try {
    const interaction = await Interaction.findById(id).populate('customer', 'name');
    if (!interaction) {
      return res.status(404).json({ message: 'Interaction not found' });
    }
    res.json(interaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Create a new interaction
exports.addInteraction = async (req, res) => {
  const interaction = new Interaction(req.body);
  try {
    const newInteraction = await interaction.save();
    res.status(201).json(newInteraction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an interaction
exports.updateInteraction = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedInteraction = await Interaction.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedInteraction) {
      return res.status(404).json({ message: 'Interaction not found' });
    }
    res.json(updatedInteraction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an interaction
exports.deleteInteraction = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedInteraction = await Interaction.findByIdAndDelete(id);
    if (!deletedInteraction) {
      return res.status(404).json({ message: 'Interaction not found' });
    }
    res.json({ message: 'Interaction deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
