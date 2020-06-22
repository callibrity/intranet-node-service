const { dbCallStatus } = require("../helpers/constants");
const { client } = require("./databaseClient");

exports.executeQuery = async function (queryString) {
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

exports.sendQueries = async function(...queries) {
  let result = [queries.slice().map(x => this.executeQuery(x))];
  return await Promise.allSettled(result);
};