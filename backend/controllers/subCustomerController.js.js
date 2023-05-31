const Subcustomer = require("../models/subCustomerModel")

// Get all contacts for a customer
exports.getAllSubCustomers = async (req, res) => {
  try {
    const customers = await Subcustomer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Please Enter Email' });
  }
}; 

exports.getSubCustomer =  async (req, res) => {
    try {
      const customer = await Subcustomer.findById(req.params.id);
      if (!customer) {
        res.status(404).json({ error: 'SubCustomer not found' });
        return;
      }
      res.json(customer);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.addSubCustomer = async (req, res) => {
        try {
          const customer = new Subcustomer(req.body);
          await customer.save();
          res.status(201).json(customer);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };

  exports.updateSubCustomer = async (req, res) => {
           try {
              const customer = await Subcustomer.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
              });
              if (!customer) {
                res.status(404).json({ error: 'SubCustomer not found' });
                return;
              }
              res.json(customer);
            } catch (error) {
              res.status(500).json({ error: 'Internal server error' });
            }
          };

  exports.deleteSubCustomer = async (req, res) => {
        try {
          const customer = await Subcustomer.findByIdAndDelete(req.params.id);
          if (!customer) {
            res.status(404).json({ error: 'SubCustomer not found' });
            return;
          }
          res.sendStatus(204);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };
      