// const Model = require('./model');

// function addChat(chat){
//     console.log('caasdkjahsd');
//     console.log(chat);
//     const myUsers = new Model(chat.users);
//     console.log('--------------*--------------');
//     console.log(myUsers);
//     myUsers.save().then(()=>{
//         console.log('regitro agregado correctamente');
        
//     } ).catch((error) =>{
//         console.error(error);
        
//     });
// }

// async function getChats(filterUser){
//     return new Promise((resolve,reject) => {
//         let filter = {};
//         if(filterUser !== null){
//             filter.user = new RegExp(filterUser,"i");
//             //filter= {user :filterUser};
//         }
//         const messages = Model.find(filter)
//         .populate('user')
//         .exec((error,populated) => {
//             if(error){
//                 reject(error);
//                 return false;
//             }
//             resolve(populated)
//         })
//         //resolve(messages);
//     })
// }

// module.exports = {
//     add : addChat,
//     list : getChats,
// }


const Model = require("./model");

function addChat(users) {
  const newChat = new Model(users);
  console.log(newChat);
  return newChat.save();
}

async function getChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if(userId){
      filter = {
        user: userId,
      }
    }
    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: getChats
};