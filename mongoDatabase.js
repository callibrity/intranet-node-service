const MongoClient = require('mongodb').MongoClient;
var env = process.env.NODE_ENV;
const baseUrl = 'mongodb+srv://test:testtest@cluster0-3crhz.mongodb.net/test?retryWrites=true&w=majority';
const url = `${baseUrl}/${env}`;
const client = new MongoClient(url, { useNewUrlParser: true });

function getQuery(){

}

function postQuery(){

}

function deleteQuery(){

}

function putQuery(){

}

const client = {
  getQuery,
  postQuery,
  deleteQuery,
  putQuery
}

module.export = client;