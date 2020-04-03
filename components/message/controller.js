const store = require('./store');

function addMessage(chat,user, message, file){
    return new Promise( (resolve,reject) =>{
        if(!chat | !user || !message){
            console.error('[MessageController]: No hay user o mensaje');
            reject('Datos invalidos');
            return false;
        }

        let fileUrl = '';

        if (file){
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        console.log(chat);
        console.log(user);
        console.log(message);
        
        const fullMessage = {
            chat :chat,
            user : user,
            message : message,
            date : new Date(),
            file : fileUrl,
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });

    

}

function getMessages(filterChat){
    return new Promise( (resolve,reject) =>{
        resolve(store.list(filterChat));
    });
}

async function updateMessage(id,message){
    return new Promise( async (resolve, reject) => { 
        if (!id|| !message){
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id,message);
        resolve(result);
    });
}

async function deleteMessage(id){
    return new Promise( async(resolve,reject) =>{
        if(!id){
            reject('Invalid Id');
            return false;
        }
        store.remove(id)
        .then(() =>{ resolve(); })
        .catch( e => {
            reject(e);
        })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};