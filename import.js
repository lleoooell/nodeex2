// j'importe ma lib mongoose
var mongoose = require('mongoose');
var Eleve = require('./models/eleve.js');
var srcListe = require('./data/liste.js');
// je crée mon schema


// je me connecte a la db
var promise = mongoose.connect('mongodb://localhost:27017/ifa', {
  useMongoClient: true,
});
// quand la connection est réussie
promise.then(function(db) {

	console.log('db.connected');
	// console.log(db);
	// je crée un nouvel eleve
	// var test = new Eleve({"nom" : 'leo'});
	// // je le save en db
	// test.save(function(err, eleve){
	// 	if(err){
	// 		return console.log(err);
	// 	}
	// 	else{
	// 		console.log("eleve success");
	// 		console.log(eleve);
	// 	}
	// })
	srcListe.forEach(function(eleveSrc){
		console.log(eleveSrc);

		var eleveToSave = new Eleve(eleveSrc);

		eleveToSave.save(function(err, success){
			if(err){
				return console.log(err);
			}
			else{
				console.log(success);
			}
		});
	})

});
// console.log(srcListe);