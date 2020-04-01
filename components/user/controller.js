const store = require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Invalid Name');
    }
    const user = {
        name : name,
    }
    return store.add(user);
}


function getUsers(filterUsers){
    return new Promise( (resolve,reject) =>{
        resolve(store.list(filterUsers));
    });
}

module.exports ={
    addUser,
    getUsers
}