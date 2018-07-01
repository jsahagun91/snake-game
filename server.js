// Snake by Jose Sahagun

var express = require("express");
// var socket = require("socket.io")

var PORT = process.env.PORT || 8080;

var app = express();

// var io = socket(server);


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// io.on('connection')

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

  console.log("we running!");