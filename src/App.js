import React from "react";
import{Routes, Route} from "react-router"
import UserPage from "./pages/userPage";
import ToDoPage from "./pages/ToDoPage"
import Home2 from './pages/Home2'
import AboutUs from './pages/AboutUs'
const App =() =>{
  return (
    <div>
   <Routes>
     <Route index path="/" element ={<Home2/>}/>
     <Route path="/todo" element ={<ToDoPage/>}/>
     {/* <Route path="/about" element ={<AboutPage/>}/> */}
      <Route path="/user" element ={<UserPage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
   </Routes>
  </div>
  )
}

export default App