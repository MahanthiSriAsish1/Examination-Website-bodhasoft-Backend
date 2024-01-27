const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Asish:<password>@cluster0.it1lvdq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});