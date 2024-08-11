import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Adduserform from "./components/Adduserform"
import Updateuserform from "./components/Updateuserform"
import Userlist from "./components/Userlist"
import Main from "./components/Main"
import PrivateRoutes from "./components/PrivateRoutes"

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route element={<PrivateRoutes/>}>
          <Route path='/adduser' element={<Main child={<Adduserform/>}/>}></Route>
          <Route path='/update' element={<Main child={<Updateuserform/>}/>}></Route>
          <Route path='/home' element={<Main child={<Userlist/>}/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
