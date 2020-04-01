const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')
const router = require('./network/routes');

db('mongodb://diego:ogeid910@cluster0-shard-00-00-skufy.mongodb.net:27017,cluster0-shard-00-01-skufy.mongodb.net:27017,cluster0-shard-00-02-skufy.mongodb.net:27017/telegrom?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);


app.use('/app', express.static('public'));
app.listen(3000);
console.log('la aplicación está escuchando en http://localhost:3000');