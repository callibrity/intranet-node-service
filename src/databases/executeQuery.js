const { dbCallStatus } = require("../helpers/constants");
const { client } = require("./databaseClient");

exports.executeMultiQuery = async function (queryString) {
  return client.query(queryString);
};

exports.executeSingleQuery = async function (queryString) {
  return client.query(queryString)
    .then((res) => {
      return { status: dbCallStatus.success, value: res };
    })
    .catch((err) => {
      return { status: dbCallStatus.error, value: err };
    });
};
