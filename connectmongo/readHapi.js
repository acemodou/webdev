var MongoClient = require('mongodb').MongoClient,
    Hapi = require('hapi');

var url = 'mongodb://localhost:27017/connectmongo'

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8080
});

// Query can be done in two ways terminal or chrome . Terminal -> : http http://localhost:8080/api/tours 
// Chrome -> http://localhost:8080/api/tours?tourPackage=Backpack Cal
//get tour list
server.route([{
        method: 'GET',
        path: '/api/tours',
        //I have pretty json install so i don't need this file 
        //config: { json: { space: 2 } }, 
        handler: function(requests, reply) {
            var findObjet = {};
            for (var key in requests.query) {
                findObjet[key] = requests.query[key];
            }
            collection.find(findObjet).toArray(function(error, tours) {
                reply(tours);
            })

        }
    },
    {
        //Get a single tour
        method: 'Get',
        path: '/api/tours/{name}',
        handler: function(requests, reply) {
            collection.findOne({ "tourName": requests.params.name },
                function(error, tour) {
                    reply(tour);
                })
        }
    },
    {
        //Add new tour 
        method: 'POST',
        path: '/api/tours',
        handler: function(requests, reply) {
            collection.insertOne(requests.payload, function(error, result) {
                reply(requests.payload);
            })
        }
    },
    //update a single tour 
    {
        method: 'PUT',
        path: '/api/tours/{name}',
        handler: function(request, reply) {

            if (request.query.replace == "true") {
                request.payload.tourName = request.params.name;
                collection.replaceOne({ "tourName": request.params.name }, request.payload, function(error, results) {
                    collection.findOne({ "tourName": request.params.name }, function(error, results) {
                        reply(results);
                    })
                })
            }
            collection.updateOne({ tourName: request.params.name }, { $set: request.payload }, function(error, results) {
                collection.findOne({ "tourNmae": request.params.name }, function(error, result) {
                    reply(results);
                })
            })

        }
    },

    {
        //Delete a signle tour 
        method: 'DELETE',
        path: 'api/tours/{name}',
        handler: function(request, reply) {
            collection.deleteOne({ tourName: request.params.name },
                function(error, results) {
                    reply().code(204);
                }
            )
        }
    }

]);

MongoClient.connect(url, function(err, db) {
    console.log("connected correctly to server");
    collection = db.collection('tours');
    server.start(function(err) {
        console.log('Hapi is listening to ', server.info.uri);
    })
});