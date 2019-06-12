const express = require('express');
const app = express();
const port = 3008;
const http = require('http').Server(app);

app.use(express.static('public')); 

http.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})