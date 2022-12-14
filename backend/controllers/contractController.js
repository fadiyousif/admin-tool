const ContractEvent = require("../models/contractModel");

// @route GET /api
const getContracts = async (_req, res) => {
  try {
    const contracts = await ContractEvent.find();
    res.status(200).json(contracts);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

// @route POST /api/create
// @route POST /api/terminate
const createContractEvent = async (req, res) => {
  const contractEvent = await ContractEvent.create(req.body);
  res.status(200).json(contractEvent);
};

module.exports = {
  getContracts,
  createContractEvent,
};
