const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');

const userModel=require('../models/userModel');
const { adduser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/usercontroller');

router.use(express.json());

//authentication

router.post('/logincheck',async(req,res)=>{
    // const userItem=req.body;
    
    const validUser=await userModel.findOne({email:req.body.email});
    if(validUser){
        if(validUser.password==req.body.password){
            const payload={
                email:req.body.email,
                password:req.body.password
            }
            var token=jwt.sign(payload,'secretkey');//token created using jwt sign
            res.status(200).send({message:'Login successful',token:token})
        }else{
            res.status(500).json({message:'user not found'})
        }
    }else{
        res.status(500).json({message:'User not found'})
    }
})

//function to verify token

function verifyToken(req,res,next){
    let token=req.headers['token'];
    try {
        if(!token)
            return res.status(401).json({ message: 'Unauthorized access: Token not provided' });
        
        let payload=jwt.verify(token,'secretkey');
        if(!payload)
            return res.status(401).json({ message: 'Unauthorized access: Invalid token' });
        
        next();
    } catch (error) {
      res.json({message:error})   

    }
  
}
//adding a new user to database user table
router.post('/adduser',verifyToken,adduser);

//retreiving all the users from db
router.get('/users',verifyToken,getUsers);

//retreiving one user from db
router.get('/user/:id',verifyToken,getUser);

//update  user details

router.put('/update/:id',verifyToken,updateUser);

//delete an user

router.delete('/deleteuser/:id',verifyToken,deleteUser)

module.exports=router;