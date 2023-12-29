const Activity = require('../models/activityModel');


// exports.getAllActivities = async (req, res) => {
//   try {
//     const activities = await Activity.find().populate('customer','name').populate('contact','name');
//     res.json(activities);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.getAllActivities = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  
  try {
    const activities = await Activity.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('customer', 'name')
      .populate('contact', 'name');
    
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addActivity = async (req, res) => {
  try {
    const { customer, contact, activityType, dateTime, description, assignedUser, status } = req.body;
    const activity = new Activity({
      customer,
      contact,
      activityType,
      dateTime,
      description,
      assignedUser,
      status
    });
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get a specific activity by ID
exports.getActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findById(id).populate('customer','name').populate('contact','name');
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an activity
exports.updateActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(updatedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an activity
exports.deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json({ message: 'Activity deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
