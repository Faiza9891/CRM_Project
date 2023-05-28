const express = require("express");

const {
    getAllCustomers,
    getCustomer,
    addCustomer,
    deleteCustomer,
    updateCustomer
} = require("../controllers/customerControllers")


const router = express.Router();

router.route("/customers").get(getAllCustomers);
router.route("/customer/:id").get(getCustomer);
router.route("/customer").post(addCustomer);
router.route("/customer/:id").put(updateCustomer);
router.route("/customer/:id").delete(deleteCustomer);


module.exports = router;