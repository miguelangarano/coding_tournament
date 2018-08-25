const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Create Schema
const EventSchema=new Schema({
    eventDescription:{
        type:String,
        
    },
    eventType:{
        type:String,
        
    },
    eventDate:{
        type:String,
        
    },
    eventLocationLatitude:{
        type:String,
        
    },
    eventLocationLongitude:{
        type:String,
        
    },
    eventImage:{
        type:String,
        
    }
});

module.exports=Item=mongoose.model('event',EventSchema);