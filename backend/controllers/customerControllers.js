const Customer = require("../models/customerModels")


exports.getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.find(req.params.id);
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Data Not Found' });
    }
  }; 

  exports.getCustomer =  async (req, res) => {
      try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
          res.status(404).json({ error: 'Customer not found' });
          return;
        }
        res.json(customer);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    };
    
    exports.addCustomer = async (req, res) => {
          try {
            const customer = new Customer(req.body);
            await customer.save();
            res.status(201).json(customer);
          } catch (error) {
            res.status(500).json({ error: 'Request Error' });
          }
        };

    exports.updateCustomer = async (req, res) => {
             try {
                const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
                  new: true,
                });
                if (!customer) {
                  res.status(404).json({ error: 'Customer not found' });
                  return;
                }
                res.json(customer);
              } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
              }
            };

    exports.deleteCustomer = async (req, res) => {
          try {
            const customer = await Customer.findByIdAndDelete(req.params.id);
            if (!customer) {
              res.status(404).json({ error: 'Customer not found' });
              return;
            }
            res.sendStatus(204);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
        };

        // exports.getGeography = async (req, res) => {
        //   try {
        //     const customer = await Customer.find();
        
        //     const mappedLocations = customer.reduce((acc, { country }) => {
        //       const countryISO3 = getCountryIso3(country);
        //       if (!acc[countryISO3]) {
        //         acc[countryISO3] = 0;
        //       }
        //       acc[countryISO3]++;
        //       return acc;
        //     }, {});
        
        //     const formattedLocations = Object.entries(mappedLocations).map(
        //       ([country, count]) => {
        //         return { id: country, value: count };
        //       }
        //     );
        
        //     res.status(200).json(formattedLocations);
        //   } catch (error) {
        //     res.status(404).json({ message: error.message });
        //   }
        // };
        