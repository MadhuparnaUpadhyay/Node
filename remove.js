
var readline = require('readline')
var value = require('./dat.json')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var MongoClient = require('mongodb').MongoClient


module.exports. removing=function() {  
    MongoClient.connect("mongodb://localhost:27017/Gaming", function(err, db) {

    db.collection('games', function(err, collection) {

        for (var i = 0; i < 5; i++) {
            var obj = {
                "name": value.games[i].name,
                "genre": value.games[i].genre,
                "rating": value.games[i].rating
            }
            console.log(value.games[i].name);
        }


        console.log("\nMade some errors want to remove?")
        rl.question('What do you think yes/no?  if yes enter object name? ', (answer) => {
            console.log(`Thank you for your  feedback: ${answer}`)
            var str1 = `${answer}`

            for (var j = 0; j < 5; j++) {
                var str2 = value.games[j].name
                if (str1.localeCompare(str2) == 0) {
                    var j11 = value.games[j].name
                    console.log("Removing:" + j11)
                    collection.remove({ name: str1 }, function(err, result) {

                        if (err) throw err

                        console.log('Document Removed Successfully')
                    })
                }

            }
            rl.close()
          
        })

    })

})
}
