var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has an extension, assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    // otherwise return index page
    res.sendFile( __dirname + "/" + "index.html" );
});

app.listen(port, function () {
    console.log('Blueprint app listening on port ' + port + '!');
});