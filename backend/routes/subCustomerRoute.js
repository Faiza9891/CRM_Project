const express = require("express");

const {
    getAllSubCustomers,
    getSubCustomer,
    addSubCustomer,
    deleteSubCustomer,
    updateSubCustomer
} = require("../controllers/subCustomerController.js")


const router = express.Router();

router.route("/subcustomers").get(getAllSubCustomers);
router.route("/subcustomer/:id").get(getSubCustomer);
router.route("/subcustomer").post(addSubCustomer);
router.route("/subcustomer/:id").put(updateSubCustomer);
router.route("/subcustomer:id").delete(deleteSubCustomer);


module.exports = router;