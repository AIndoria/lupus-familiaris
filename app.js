let express = require("express");
let app = express();

app.get("/", function(request, response){
  response.send("app running...")
});

app.listen(3000, function(){
  console.log("Now listening on port 3000");
});