const db = require('mongoose');
db.Promise= global.Promise;
const uri = 'mongodb://diego:ogeid910@cluster0-shard-00-00-skufy.mongodb.net:27017,cluster0-shard-00-01-skufy.mongodb.net:27017,cluster0-shard-00-02-skufy.mongodb.net:27017/telegrom?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

async function connect(url){
    await db.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
    }).then(() => {
        console.log('conectado a MongoDB')
    }).catch((error) => {
        console.error(error);
    } )  ;
}

module.exports = connect;