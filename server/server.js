const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const events=require('./routes/api/events');
const image=require('./routes/api/image');
const processImage=require('express-processimage');


const app=express();
const dirname='uploads/';
//Bodyparser Middleware
app.use(bodyParser.json());

app.use(processImage('/static'));
app.use('/static',express.static('public'));

//DB config
const db=require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(()=>console.log('MongoDB Connected'))
    .catch(err=>console.log(err));


//Use routes
app.use('/api/events', events);
app.use('/api/upload', image);
app.use('/static',image);


const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));