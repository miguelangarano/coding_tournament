const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Create Schema
const EventSchema=new Schema({
    eventDescription:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventLocationLatitude:{
        type:String,
        required:true
    },
    eventLocationLongitude:{
        type:String,
        required:true
    },
    eventImage:{
        type:String,
        required:true
    }
});

module.exports=Item=mongoose.model('event',EventSchema);