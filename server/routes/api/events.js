const express=require('express');
const router=express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

//Item model
const Event=require('../../models/Event');

//@route GET api/events
//@desc Get all events
//@access Public
router.get('/',(req,res)=>{
    Event.find()
        .then(events=>res.json(events));
});


//@route POST api/events
//@desc Create event
//@access Public
router.post('/',(req,res)=>{
    const newEvent=new Event({
        eventDescription: req.body.eventDescription,
        eventType:req.body.eventType,
        eventDate: req.body.eventDate,
        eventLocationLatitude:req.body.eventLocationLatitude,
        eventLocationLongitude:req.body.eventLocationLongitude,
        eventImage:req.body.eventImage
    });
    newEvent.save().then(event=>res.json('Creado exitosamente:   '+event));
});



module.exports=router;