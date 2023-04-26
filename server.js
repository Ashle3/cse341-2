const express = require('express');
const app = express();
const test = require('./controllers/test');

app.get('/', test.helloRoute);

app.get('/general', test.kenobiRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));