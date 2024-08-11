import { Box, Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const capValue=()=>{
    axios.post('http://localhost:3000/api/logincheck',form)
    .then((res)=>{
      alert(res.data.message);
      localStorage.setItem('token',res.data.token);
      navigate('/home');
    })
  }

  return (
    <Box
        component="form"  
        style={{ marginTop:"10% ", textAlign:'center' }}
    >
        <Typography  variant="h4" style={{ textAlign:'center' }}>
            Myapp Login
        </Typography><br /> 

        <Grid container spacing={2} style={{  textAlign:'center' }}>
       
             <Grid item xs={12} md={12}>
                <TextField
                required
                id="outlined-required"
                label="email"
                value={form.email}
                onChange={(e)=>{
                  setForm({...form,email:e.target.value})
                }}
                />
          </Grid>
          <Grid item xs={12} md={12}>
                <TextField
                required
                id="outlined-required"
                label="password"
                value={form.password}
                onChange={(e)=>{
                  setForm({...form,password:e.target.value})
                }}
                />
          </Grid>
          <Grid item xs={12} md={12}>
          <Button variant="contained" onClick={capValue}>Login</Button>
          </Grid>

  
</Grid>

</Box>   
  )
}

export default Login
