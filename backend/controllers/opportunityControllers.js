const Opportunity = require('../models/opportunityModel');

// Get all opportunities
exports.getAllOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.json(opportunities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new opportunity
exports.addOpportunity = async (req, res) => {
  const opportunity = new Opportunity(req.body);
  try {
    const newOpportunity = await opportunity.save();
    res.status(201).json(newOpportunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific opportunity by ID
exports.getOpportunity = async (req, res) => {
  const { id } = req.params;
  try {
    const opportunity = await Opportunity.findById(id);
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json(opportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an opportunity
exports.updateOpportunity = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOpportunity = await Opportunity.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedOpportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json(updatedOpportunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an opportunity
exports.deleteOpportunity = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOpportunity = await Opportunity.findByIdAndDelete(id);
    if (!deletedOpportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json({ message: 'Opportunity deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
