let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/ajatekdb";

// Create database and collection
let initalizeDatabase = () => {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    console.log("Database created!");

    let dbo = db.db("ajatekdb");
    dbo.createCollection("batch_reports", function (err, res) {
      console.log("Collection created!");
    });

    db.close()
  });
}
initalizeDatabase();

// Insert or update data
exports.updateData = (collection, jsonObject) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    let dbo = db.db("ajatekdb");

    // Query to check if particular property exists.
    let myquery = { BatchId: jsonObject.BatchId };

    // If it does not exist, insert a new document based of js object - or update existing one.
    let newvalues = {
      $set: jsonObject
    };

    // Option initialized to first check if documente exists. 
    let options = {
      upsert: true
    };

    // Opertion sent to MongoDB database.
    dbo.collection(collection).updateOne(myquery, newvalues, options, function (err, res) {
      if (err) throw err;
      db.close();
    });
  });
}

// Select all
exports.selectAllData = (callback) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ajatekdb");
    dbo.collection("batch_reports").find({}).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      return callback(result);
    });
  });
}

// Select one
exports.selectSpecificData = (collection, search, callback) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ajatekdb");

    if (search != null) {
      dbo.collection(collection).findOne({ BatchId: search }, function (err, result) {
        if (err) throw err;
        db.close();
        return callback(result);
      });
    } else {
      dbo.collection(collection).findOne({}, { sort: { $natural: -1 } }, function (err, result) {
        if (err) throw err;
        db.close();
        return callback(result);
      })
    }
  });
}


