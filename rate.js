
var value = require('./dat.json')


var MongoClient = require('mongodb').MongoClient


module.exports. rated=function() {  
    MongoClient.connect("mongodb://localhost:27017/Gaming", function(err, db) {

     db.collection('games', function(err, collection) {



        for (var i = 0; i < 5; i++) {
            var obj = {
                    "name": value.games[i].name,
                    "genre": value.games[i].genre,
                    "rating": value.games[i].rating
                }
        }


        console.log("\nDisplaying top 3 rated")

    })
    db.collection('games').find({}).sort({rating : -1}).limit(3).toArray(function(err,result){

        if (err)
         throw err;
        console.log(result)

    })
    
     db.collection('games').update({ name: "Star Wars" }, { name:"The Star Wars",  rating: 65,  genre: "action", achievements: [ "Game Demon", "Speed Demon" ]},function(err,result){
        if (err)
         throw err;
        console.log("Updated")


})

})
}
