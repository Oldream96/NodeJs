const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')
const multer = require('multer'); //para subida de archivos
const path = require("path")

const storage = multer.diskStorage({   //para guardar imagen con su extensión
    destination : "public/files/",
    filename : function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + 
        path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage }); //para guardar imagen con su extensión

// const upload = multer({
//     destination : 'uploads/',    //en binario guarda por defecto archivo
// })

router.get('/', (req, res)=>{
    const filterMessages = req.query.chat || null;
    console.log(filterMessages);
    
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req,res,messageList,200)
        
    }).catch(
        e =>{
            response.error(req,res,'error inesperado',500,e);
        });
} );

router.post('/', upload.single('file') , (req, res)=>{
    controller.addMessage(req.body.chat,req.body.user,req.body.message,req.file)
    .then((fullMessage) =>{
        response.success(req,res,fullMessage,201);
    }).catch(()=>{
        response.error(req,res,'Información Invalido',400 , 'error en el controller');
    });
} );


router.patch('/:id', function (req, res) {
    console.log(req.params.id);
    controller.updateMessage(req.params.id,req.body.message)
    .then((data) => {
        response.success(req,res,data,200);
    }).catch( e =>{
        response.error(req,res,'Error Interno',500, e);
    });
});


router.delete('/:id', function (req,res) {
    controller.deleteMessage(req.params.id)
    .then( () =>{
        response.success(req,res,`Usuario ${req.params.id} eliminado`,200);
    }).catch( e =>{
        response.error(req,res,'Error al borrar',500,e)
    });
});


module.exports = router;