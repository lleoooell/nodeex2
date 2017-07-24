var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var liste = [{
    "id": 0,
    "nom": "BOITEUX",
    "prenom": "Rémi",
    "javascript": "Non",
    "fav_web": "http://motogp.com/fr",
    "fav_web_why": "Le design est agréable et j’y trouve toutes les infos dont j’ai besoin",
    "fav_app": "WEC (World Endurance Championship)",
    "fav_app_why": "Pour y trouver toutes les infos quand je ne peux pas suivre les courses",
    "before_ifa": "Chef de projets SEM",
    "why_ifa": "Pour acquérir des compétences en développement et mieux comprendre les différents langages",
    "contact_mail": "boiteux.remi@gmail.com"
}, {
    "id": 1,
    "nom": "Dos Santos",
    "prenom": "Christophe",
    "javascript": "Pas d'expérience",
    "fav_web": "behance / themeforest",
    "fav_web_why": "",
    "fav_app": "pas d'appli",
    "fav_app_why": "",
    "before_ifa": "graphiste / webdesigner",
    "why_ifa": "Pour acquérir des compétences en développement intégration",
    "contact_mail": "contact@christopheds.com Www.christopheds.com"
}];

app.use(bodyParser.urlencoded({
    extended: true
}))


app.listen(3000, function() {
    console.log('listening on 3000')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});


app.post('/quotes', function(req, res) {
    console.log(req.body);
    console.log("my name is " + req.body.nom);
    var newUser = {
    	nom : req.body.nom,
    	prenom: req.body.prenom
    };
    liste.push(newUser);
    // liste.push(t);
    res.send(200);

});
app.get('/api/liste', function(req, res) {
    res.json(liste);
});