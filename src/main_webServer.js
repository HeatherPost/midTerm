var express = require('express');
var app = express();
var myPower = require('./common/util/math/myPower.js');

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
        name: 'Heather',
        lastname: 'Post'
    };
    res.render('./pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var inputNum = 2;
    var squareTemp = {
        head: { title: 'Square Page' },
        body: { input: inputNum, result: myPower.squareNum(inputNum) }
    };
    res.render('./pages/square.ejs', squareTemp);
});

app.get('/cube', function(req, res) {
    var inputNum = 3;
    var cubeTemp = {
        head: { title: 'Cube Page' },
        body: { input: inputNum, result: myPower.cubeNum(inputNum) }
    };
    res.render('./pages/cube.ejs', cubeTemp);
});

app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('pages/about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});

app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});