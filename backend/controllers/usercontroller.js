const express=require('express');
const userModel=require('../models/userModel')

const adduser=async(req,res)=>{
    
    try{
        const userItem={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }
        const userData=new userModel(userItem);
        await userData.save();
        res.status(200).json(userData);
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Server error from userController'});
    }
    
}

const getUsers=async(req,res)=>{
    try{
        const users=await userModel.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:'Server error from userController'})
    }
    
}

const getUser= async(req,res)=>{
    try{
        const user=await userModel.findById(req.params.id);
        res.status(200).json(user);

    }catch(error){
        res.status(500).json({message:'Érror from userController'+error})

    }
}

const updateUser=async(req,res)=>{
    try {
        var username=req.body.username;
        var email=req.body.email;
        var id=req.params.id;

        await userModel.findByIdAndUpdate(id,{ username,email},{new:true });
        if(!userModel){
           res.status(500).json({message:'user not found!'}) ;
        }else{
            res.status(200).json(userModel);
        }
    } catch (error) {
        res.status(500).json({message:'Érror from userController'+error})
    }
}

const deleteUser=async(req,res)=>{
    try {
        var id= req.params.id;
        const userItem=await userModel.findByIdAndDelete(id);
        if(!userItem){
            res.status(500).json({message:'user not found!'});
        }else{
            res.status(200).json(userModel);
        }
    } catch (error) {
        res.status(500).json({message:'Érror from userController'+error})
    }
}

module.exports={adduser,getUsers,getUser,updateUser,deleteUser}