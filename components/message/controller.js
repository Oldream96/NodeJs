const store = require('./store');

function addMessage(user, message){
    return new Promise( (resolve,reject) =>{
        if(!user || !message){
            console.error('[MessageController]: No hay user o mensaje');
            reject('Datos invalidos');
            return false;
        }
        const fullMessage = {
            user : user,
            message : message,
            date : new Date(),
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });

    

}

function getMessages(filterUsers){
    return new Promise( (resolve,reject) =>{
        resolve(store.list(filterUsers));
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