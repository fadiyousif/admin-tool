const ContractEvent = require("../models/contractModel");

// @route GET /api
const getContracts = async (_req, res) => {
  try {
    const contracts = await ContractEvent.find();
    res.status(200).json(contracts);
  } catch (err) {
    res.status(404).json({ error: "Could not fetch list of contracts" });
  }
};

// @route POST /api/create
// @route POST /api/terminate
const createContractEvent = async (req, res) => {
  try {
    const contractEvent = await ContractEvent.create(req.body);
    res.status(201).json(contractEvent);
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
  getContracts,
  createContractEvent,
};
