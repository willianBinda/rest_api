const express = require ('express');
const app = express();
var bodyParser = require('body-parser');
app.use(express.json());
app.use('/', require('./route/postsRoute'));
app.listen(3000);