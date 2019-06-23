var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
    var sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof!',
        cat: 'I hate you human',
        goldfish: '...'
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send('The ' + animal + " says '" + sound + "'")
});

app.get('/repeat/:word/:number', function(req, res) {
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var response = '';
    for(var i = 0; i < number; i++) {
        response += word + ' ';
    }
    res.send(response);
});

app.get('*', function(req, res) {
    res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function() {
    console.log('Server has started on port 3000')
});