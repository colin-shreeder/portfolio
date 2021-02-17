const express = require("express");
const app = express();
const { SERVER_PORT} = process.env;
const path = require('path')


///////////


app.use(express.json());



app.use(express.static(__dirname + '/../build'))

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(4030, () => {
    console.log(`Server listening on port 4030`);
  });  