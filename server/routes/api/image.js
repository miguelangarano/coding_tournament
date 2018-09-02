const express=require('express');
const router=express.Router();
const multer=require('multer');
const uuidv4 = require('uuid/v4');
var pat=process.cwd();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 


  var storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
        },
        filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+'.jpg')
        }
    });


    var upload = multer({storage: storage});


//@route GET api/events
//@desc Get all events
//@access Public
router.get("/:file",function (req, res) {
  //res.send({path:req.file.path});
  res.sendFile(pat+'/public/uploads/'+req.params.file);
});



  //@route POST api/upload
//@desc Upload image
//@access Public
router.post('/',upload.single('imagen'), (req, res)=>{
    res.send({path:req.file.path});
});



module.exports=router;