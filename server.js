var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/logon.html', function (req, res) {
   res.sendFile( `${__dirname}/logon.html` );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      usrid:req.query.usrid,
      pwd:req.query.pwd
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})