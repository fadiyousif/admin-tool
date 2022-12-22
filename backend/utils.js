const { writeFile } = require("fs");

const writeEventToFile = (path, contractEvent) => {
  return new Promise((resolve, reject) => {
    writeFile(
      path,
      "\r\n" + JSON.stringify(contractEvent),
      { flag: "a+" },
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(contractEvent);
        }
      }
    );
  });
};

const parseEvents = (events) => {
  return events.split("\r\n").reduce((list, eventStr) => {
    const event = JSON.parse(eventStr);
    const { name, contractId, premium, startDate, terminationDate } = event;

    if (name === "ContractCreatedEvent") {
      const contract = {
        contractId,
        premium,
        startDate,
      };
      list.unshift(contract);
    } else {
      const existingContract = list.find(
        (event) => event.contractId === contractId
      );
      existingContract.terminationDate = terminationDate;
    }
    return list;
  }, []);
};

module.exports = { writeEventToFile, parseEvents };
