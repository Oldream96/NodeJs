// const store = require('./store');

// function addChat(chat){
//     return new Promise( (resolve,reject) =>{
//         if(!chat.users){
//             console.error('[MessageController]: No hay users');
//             reject('Datos invalidos');
//             return false;
//         }
//         const fullUsers = chat;
//         console.log('ENVIANDO DATA /////////////////////////');
//         console.log(fullUsers);
//         store.add(fullUsers);
//         resolve(fullUsers);
//     });

    

// }

// function getChats(filterChat){
//     return new Promise( (resolve,reject) =>{
//         resolve(store.list(filterChat));
//     });
// }



// module.exports = {
//     addChat,
//     getChats,
// };



const store = require("./store");

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
     };
    console.log(chat);
    return store.add(chat);  
}

function getChats(userId) {
  return store.list();
}

module.exports = {
  addChat,
  getChats
};