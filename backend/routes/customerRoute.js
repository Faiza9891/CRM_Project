const express = require("express");

const {
    getAllCustomers,
    getCustomer,
    addCustomer,
    deleteCustomer,
    updateCustomer,
} = require("../controllers/customerControllers")
const {
    getAllActivities,
    getActivity,
    addActivity,
    updateActivity,
    deleteActivity,
  } = require("../controllers/activityControllers");
  const {
    getAllContacts,
    getContact,
    addContact,
    updateContact,
    deleteContact,
  } = require("../controllers/contactControllers");
  const {
    getAllInteractions,
    getInteraction,
    addInteraction,
    updateInteraction,
    deleteInteraction,
  } = require("../controllers/interactionControllers");
  const {
    getAllNotes,
    getNote,
    addNote,
    updateNote,
    deleteNote,
  } = require("../controllers/noteControllers");
  const {
    getAllOpportunities,
    getOpportunity,
    addOpportunity,
    updateOpportunity,
    deleteOpportunity,
  } = require("../controllers/opportunityControllers");



const router = express.Router();

// Customers
router.route("/customers").get(getAllCustomers);
router.route("/customer/:id").get(getCustomer);
router.route("/customer").post(addCustomer);
router.route("/customer/:id").put(updateCustomer);
router.route("/customer/:id").delete(deleteCustomer);
//activity
router.route("/activities").get(getAllActivities);
router.route("/activities/:id").get(getActivity);
router.route("/activities").post(addActivity);
router.route("/activities/:id").put(updateActivity);
router.route("/activities/:id").delete(deleteActivity);
//contacts
router.route("/contacts").get(getAllContacts);
router.route("/contacts/:id").get(getContact);
router.route("/contacts").post(addContact);
router.route("/contacts/:id").put(updateContact);
router.route("/contacts/:id").delete(deleteContact);
//interactions
router.route("/interactions").get(getAllInteractions);
router.route("/interactions/:id").get(getInteraction);
router.route("/interactions").post(addInteraction);
router.route("/interactions/:id").put(updateInteraction);
router.route("/interactions/:id").delete(deleteInteraction);
//notes
router.route("/notes").get(getAllNotes);
router.route("/notes/:id").get(getNote);
router.route("/notes").post(addNote);
router.route("/notes/:id").put(updateNote);
router.route("/notes/:id").delete(deleteNote);
//opportunity
router.route("/opportunities").get(getAllOpportunities);
router.route("/opportunities/:id").get(getOpportunity);
router.route("/opportunities").post(addOpportunity);
router.route("/opportunities/:id").put(updateOpportunity);
router.route("/opportunities/:id").delete(deleteOpportunity);





 module.exports = router;
