//setup Mongo client and connect to database using tours.json file 
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/connectmongo';

var findDocuments = function(db, callback) {
    var collection = db.collection('tours');

    collection.find({ "tourPackage": "Snowboard Cali" }).toArray(function(err, docs) {
        console.log(docs);
        callback;
    })
}


MongoClient.connect(url, function(err, db) {
    console.log("successfully connected to the server:");
    findDocuments(db, function() {
        db.close();
    })

})