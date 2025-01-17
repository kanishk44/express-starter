const express = require("express");
const contactController = require("../controllers/contact");

const router = express.Router();

router.get("/contactus", contactController.getContactUs);
router.post("/success", contactController.postSuccess);

module.exports = router;
