const { createReadStream } = require("fs");
const { parseEvents, writeEventToFile } = require("../utils");

class ContractEvent {
  static path = "./data/test-data-full-stack.txt";

  static find() {
    let data = "";

    return new Promise((resolve, reject) => {
      const readStream = createReadStream(ContractEvent.path, "utf-8");
      readStream
        .on("error", (error) => reject(error))
        .on("data", (chunk) => {
          data += chunk;
        })
        .on("end", () => {
          const contracts = parseEvents(data);
          resolve(contracts);
        });
    });
  }

  static async create(contractEvent) {
    const newContractEvent = await writeEventToFile(
      ContractEvent.path,
      contractEvent
    );
    return newContractEvent;
  }
}

module.exports = ContractEvent;
