const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();

require('./db/mongodb');
const userRoute=require('./routes/userRoute');

app.use(express.json());
app.use(cors());

app.use('/api',userRoute);

const port=process.env.port||3000;
app.listen(port,()=>{
    console.log('Myapp server listening to :'+port)
})
