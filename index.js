const connecttoMongo=require('./Db');
var cors = require('cors')
connecttoMongo();
const server=require('serverless-http');
const express = require('express')
const port=5000;
const app = express();
app.use(cors())
app.use(express.json());
app.use('/.netlify/functions/api/Student',require('./Routes/Student'));
app.use('/.netlify/functions/api/Student/getuser',require('./Routes/Student'));
module.exports.handler=server(app);