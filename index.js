const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 443;
const code_version = "1.0.1";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (rew,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const options = {
    key: fs.readFileSync('origin.key'),
    cert: fs.readFileSync('origin.pem')
};

https.createServer(options, app).listen(port, () => {
    console.log(`server running at https://localhost:${port}/`);
    console.log(`version of webserver is: ${code_version}`)
});