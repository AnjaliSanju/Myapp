import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
// import axios from 'axios';
import axiosInstance from "../axiosinterceptor";

const Adduserform = () => {

   
    const [form,setForm]=useState({
        name:'',
        email:'',
        password:''
    })
    function capValue(){
        axiosInstance.post('http://localhost:3000/api/adduser',form).then((res)=>{
          alert('User successfully added');
          console.log(res.json);
        }
      ).catch((error)=>{
        console.log(error)
      })}
    
  return (
    <Box
    component="form"
    style={{ marginTop:"10% ", textAlign:'center' }}

    >
    <Typography variant="h4" style={{ textAlign:'center',marginBottom:"2% " }}>Add User</Typography>
    <div style={{ margin:'5px' }}>
      <TextField
        required
        label="Name"
        value={form.name}
        onChange={(e)=>{
            setForm({...form,name:e.target.value})
        }}
      />
    </div>
    <div style={{ margin:'5px' }}>
      <TextField
        required
        label="Email"
        value={form.email}
        onChange={(e)=>{
            setForm({...form, email:e.target.value})
        }}
      />
    </div>
    <div style={{ margin:'5px' }}>
      <TextField
        required
        label="Password"
        type="password"
        value={form.password}
        onChange={(e)=>{
            setForm({...form, password:e.target.value})
        }}
      />
    </div>
    <div style={{ margin:'5px' }}>
    <Button variant="contained" onClick={capValue}>Add</Button>
    </div>
    </Box>
  )
}

export default Adduserform
