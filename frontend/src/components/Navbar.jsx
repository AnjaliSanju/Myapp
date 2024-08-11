import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Myapp
        </Typography>
        <Link to='/home'> <Button color="inherit" style={{ color:'white' }}>Home</Button></Link> 
        <Link to='/login'> <Button color="inherit" style={{ color:'white' }} onClick={()=>{
          localStorage.removeItem('token');
          navigate('/login');
        }}>LogOut</Button></Link> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
