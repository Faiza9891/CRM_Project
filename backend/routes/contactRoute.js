const express = require("express");

const {
    getAllContacts,
    getContact,
    addContact,
    deleteContact,
    updateContact
} = require("../controllers/contactControllers")


const router = express.Router();

router.route("/customers/:customerId/contacts").get(getAllContacts);
router.route("/customer/:id").get(getContact);
router.route("/customer/:customerId/contact").post(addContact);
router.route("/contact/:id").put(updateContact);
router.route("/contact/:id").delete(deleteContact);


module.exports = router;