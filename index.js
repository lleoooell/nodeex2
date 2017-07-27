var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Eleve = require('./models/eleve.js');
var app = express();

var promise = mongoose.connect('mongodb://localhost:27017/ifa', {
    useMongoClient: true,
});
// quand la connection est réussie
promise.then(function(db) {

    console.log('db.connected');

    app.listen(3000, function() {
        console.log('listening on 3000 and database is connected');
    });

});

app.use(bodyParser.urlencoded({
        extended: true
    }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});


app.post('/quotes', function(req, res) {
    console.log(req.body);
    console.log("my name is " + req.body.nom);
    var newUser = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };
    liste.push(newUser);
    // liste.push(t);
    res.send(200);

});
app.get('/api/liste', function(req, res) {
     Eleve.find({},function(err, collection){
        if(err){
            console.log(err);
            return res.send(500);
        }
        else{
            return res.send(collection);
        }
    });
    
});
app.get('/api/liste/:id', function(req, res) {
    console.log(req.params);
    console.log(req.params.id);
    Eleve.findOne({"_id" : req.params.id},function(err, monobject){
        if(err){
            console.log(err);
            return res.send(err);
        }
        else{
            return res.send(monobject);
        }
    });
    //  Eleve.find({},function(err, collection){
    //     if(err){
    //         console.log(err);
    //         return res.send(500);
    //     }
    //     else{
    //         return res.send(collection);
    //     }
    // });
    
});