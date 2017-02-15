var express = require('express');
var bodyParser= require('body-parser')
var app = express()
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);




var MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/Gaming", (err, db) => {
 
app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json())

 /*app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html')
//  res.render("index") 
//res.send("please give a collection")
})
*/
app.get('/', function(req, res) {
  db.collection('games').find({name:"Star Wars"}).toArray(function(e, results){
    if (e)
       return next(e)
    res.send(results)
  })
})


app.post('/', function(req, res) {
  db.collection('games').insert(req.body, {}, function(e, results){
    if (e) return next(e)
    res.send(results)
  return
  res.redirect('/')
  })
})

/*app.post('/quotes', (req, res) => {
 	console.log(req)
   	db.collection('games').save(req.body, (err, result) => {
     		if (err) 
     			return console.log(err)
     	console.log('saved to database')
     res.redirect('/')
  
 })
 })
*/
app.put('/', function(req, res) {
  db.collection('games').update({ name: "Star Wars" }, { name:"The Star Wars",  rating: 65,  genre: "action", achievements: [ "Game Demon", "Speed Demon" ]},function(e,result){

    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  return
  })
})


app.del('/', function(req, res) {
  db.collection('games').remove({name:"Attack of the Clones"}, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  return
  })
})


   app.listen(5000, function() {
   console.log('listening on 5000')
 })
    
})
    

 
