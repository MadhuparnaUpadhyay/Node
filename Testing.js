var MongoClient = require('mongodb').MongoClient
var value = require('./dat.json')
var ob1 = require('./remove.js')
var ob2=require('./find.js')
var ob3=require('./rate.js')
var q = require('q');
//var q = require('promised-io/lib/promise');

MongoClient.connect("mongodb://localhost:27017/Gaming", function(err, db) {
    db.collection('games', function(err, collection) {

        for (var i = 0; i < 5; i++) {
            var obj = {
                "name": value.games[i].name,
                "genre": value.games[i].genre,
                "rating": value.games[i].rating
            }

            collection.insert({ "name": obj.name, "genre": obj.genre, "rating": obj.rating });
        }
    });


    db.collection('games', function(err, collection) {


        console.log("\nDisplaying all values\n")

        for (var k = 0; k < 5; k++) {
            console.log(value.games[k].name)
        }
        console.log("\n\n")

    })

   

    ob1.removing()
    ob2.finding()
    ob3.rated()

})
