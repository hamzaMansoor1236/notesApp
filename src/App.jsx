import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import PageOne from './pages/PageOne.jsx'
 import DashBoard from "./pages/DashBoard.jsx";

function App() {
  return (

    <BrowserRouter>
    <Routes>


      <Route  path='/' element={<PageOne></PageOne>}></Route>



      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
    </Routes>
    
    </BrowserRouter>
   
  )
}
export default App
