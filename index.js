const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
const code_version = "1.0.0";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (rew,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () =>{
    console.log(`server running at http://localhost:${port}/`);
    console.log(`version of webserver is: ${code_version}`)
});