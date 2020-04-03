// const express = require('express');
// const router = express.Router();

// const response = require('../../network/response');


// const controller = require('./controller')

// router.get('/', (req, res)=>{
//     const filterChats = req.query.user || null;
//     controller.getChats(filterChats)
//     .then((ChatList) => {
//         response.success(req,res,ChatList,200)
        
//     }).catch(
//         e =>{
//             response.error(req,res,'error inesperado',500,e);
//         });
// } );

// router.post('/', (req, res)=>{
//     const { users } = req.body;
//     console.log({users});
    
//     controller.addChat( { users } )
//     .then((fullChat) =>{
//         response.success(req,res,fullChat,201);
//     }).catch(()=>{
//         response.error(req,res,'Información Invalido',400 , 'error en el controller');
//     });
// } );


// module.exports = router;




const express = require("express");
const responseType = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", function(request, response) {
  controller
    .addChat(request.body.users)
    .then(data => {
      responseType.success(request, response, data, 200);
    })
    .catch(error => {
      responseType.error(request, response, "Internal error", 500, error);
    });
});

router.get("/:userId", function(request, response) {
  controller
    .getChats(request.params.userId)
    .then(data => {
      responseType.success(request, response, data, 200);
    })
    .catch(error => {
      responseType.error(request, response, "Internal error", 500, error);
    });
});

module.exports = router;