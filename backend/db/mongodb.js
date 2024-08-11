const mongoose=require('mongoose');

 mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log('Myapp db connected');
})
.catch((error)=>{
    console.log('db connection lost! Error:'+error);
})