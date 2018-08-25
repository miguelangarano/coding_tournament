const express=require('express');
const router=express.Router();

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
        eventDate: req.body.eventDate,
        eventLocationLatitude:req.body.eventLocationLatitude,
        eventLocationLongitude:req.body.eventLocationLongitude
    });
    newEvent.save().then(event=>res.json('Creado exitosamente:   '+event));
});



module.exports=router;