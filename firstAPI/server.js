var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// and use that body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var bumbu = [
    {
        "id":"1",
        "text":"Telur"
    },
    {
        "id":"2",
        "text":"Susu"
    },
    {
        "id":"3",
        "text":"Jahe",
    },
    {
        "id":"4",
        "text":"Gula pasir"
    }
];

// app.get('/', function(req, res) {
//     res.send('My First API !');
// });

app.get('/bumbu', function(req, res) {
    res.send(bumbu);
});

app.post('/bumbu', function(req, res) {
    var bumbu_baru = req.body;
    if (!bumbu_baru || bumbu_baru.text === "") {
        res.status(500).send({error: 'Bumbu harus punya nama'});
    } else {
        bumbu.push(bumbu_baru);
        res.status(200).send(bumbu);
    }
});

app.put('/bumbu/:bumbuId', function(req, res) {

    var newText = req.body.text;

    if (!newText || newText === '') {
        res.status(500).send({error: 'Bumbu tidak boleh kosong'})
    } else {
        var objectFound = false;
        for (var x = 0; x < bumbu.length; x++) {
            var bum = bumbu[x];

            if (bum.id === req.params.bumbuId) {
                bumbu[x].text = newText;
                objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            res.status(500).send({error: 'Bumbu id tidak ditemukan'});
        } else {
            res.send(bumbu);    
        }
        
    };
});

app.listen(3000, function() {
    console.log('First API running on port 3000');
})
