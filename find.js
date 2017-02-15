
var readline2 = require('readline')
var value = require('./dat.json')

var r2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
})
var MongoClient = require('mongodb').MongoClient


module.exports. finding=function() {  
    MongoClient.connect("mongodb://localhost:27017/Gaming", function(err, db) {

     db.collection('games', function(err, collection) {



        for (var i = 0; i < 5; i++) {
            var obj = {
                    "name": value.games[i].name,
                    "genre": value.games[i].genre,
                    "rating": value.games[i].rating
                }
                // console.log(value.games[i].name);
        }


        console.log("\nWant to find one?")
        r2.question('What do you think yes/no?  if yes enter object name? ', (answer1) => {
            console.log(`Thank you for your  feedback: ${answer1}`)
            var str1 = `${answer1}`
        

        for (var j = 0; j < 5; j++) {
            var str2 = value.games[j].name
            if (str1.localeCompare(str2) == 0) {
                var j11 = value.games[j].name
                console.log("Found:" + j11)
                collection.findOne({}, { name: j11 }, function(err, result) {
                    if (err) throw err;
                    console.log('Document found')
                })
            }

        }
r2.close()

    })
})
})
}
