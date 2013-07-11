var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('/index.html', function(err, data) {
      if err throw err;
      var buffer = new Buffer(16)
      buffer.write(data)
      response.send(buffer.toString);
  });
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
