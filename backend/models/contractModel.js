const { createReadStream } = require("fs");
const { parseEvents, writeEventToFile } = require("../utils");

const path = "./data/test-data-full-stack.txt";

const find = () => {
  let data = "";

  return new Promise((resolve, reject) => {
    const readStream = createReadStream(path, "utf-8");
    readStream
      .on("error", (error) => reject(error))
      .on("data", (chunk) => (data += chunk))
      .on("end", () => {
        const contracts = parseEvents(data);
        resolve(contracts);
      });
  });
};

const create = (contractEvent) => {
  const event = writeEventToFile(path, contractEvent);
  return event;
};

module.exports = {
  find,
  create,
};
