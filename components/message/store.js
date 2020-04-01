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
    let filter = {};
    if(filterUser !== null){
        filter.user = new RegExp(filterUser,"i");
        //filter= {user :filterUser};
    }
    const messages = await Model.find(filter);
    return messages;
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