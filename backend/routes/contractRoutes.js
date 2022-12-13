const express = require("express");
const router = express.Router();
const {
  getContracts,
  createContractEvent,
} = require("../controllers/contractController");

router.get("/", getContracts);
router.post("/create", createContractEvent);
router.post("/terminate", createContractEvent);

module.exports = router;
