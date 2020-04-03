const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save().then(()=>{
        console.log('regitro agregado correctamente');
        
    } ).catch((error) =>{
        console.error(error);
        
    });
}

async function getMessage(filterUser){
    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterUser !== null){
            //filter.user = new RegExp(filterUser,"i");   //PARA BUSCAR COMO %% EN SQL
            filter= {user :filterUser};  //BUSQUEDAS EXACTAS CASI SIEMPRE SE USAN CON IDS
        }
        const messages = Model.find(filter)
        .populate('user')
        .exec((error,populated) => {
            if(error){
                reject(error);
                return false;
            }
            resolve(populated)
        })
        //resolve(messages);
    })
}


async function updateText(id,message){
    const foundMessage = await Model.findOne({
          _id:id   
        });
    
        foundMessage.message = message;
        const newMessage = await foundMessage.save();
        return newMessage;
}


async function deleteMessage(id){
    Model.deleteOne({
        _id :id
    }).then( (data) =>{ 
        console.log('eliminado correctamente');
        console.log(data);
        
    }).catch(e =>{ console.error(e);
    });
}

module.exports = {
    add : addMessage,
    list : getMessage,
    updateText : updateText,
    remove : deleteMessage,
    //get
    //update
    //delete
}