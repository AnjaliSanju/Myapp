import { Box, Button, TextField, Typography } from "@mui/material"
// import axios from "axios"
import { useEffect, useState } from "react"
import axiosInstance from "../axiosinterceptor"

const Updateuserform = () => {
    const [form,setForm]=useState({
        name:'',
        email:'',
        password:''
    })
    useEffect(()=>{
        axiosInstance.get('http://localhost:3000/api/user/:id').then((res)=>{
            setForm(res.data)
        })
    },[])
  return (
    <Box
    component="form"
    style={{ marginTop:"10% ", textAlign:'center' }}

    >
    <Typography variant="h4" style={{ textAlign:'center',marginBottom:"2% " }}>Update User info</Typography>
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
            setForm({...form,email:e.target.value})
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
            setForm({...form,password:e.target.value})
        }}
      />
    </div>
    <div style={{ margin:'5px' }}>
    <Button variant="contained" >Add</Button>
    </div>
    </Box>
  )
}

export default Updateuserform
