const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const path=require('path');

require('./db/mongodb');
const userRoute=require('./routes/userRoute');

app.use(express.json());
app.use(cors());

app.use('/api',userRoute);
app.get('/',function(req,res){
app.use(express.static(path.resolve(__dirname,"frontend","build")));
res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
});

const port=process.env.port||3000;
app.listen(port,()=>{
    console.log('Myapp server listening to :'+port)
})
