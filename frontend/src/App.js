import { Iron } from "./categoryFolder/allRoute/Iron/Iron";
import {Routes,Route} from "react-router-dom"
// import NewUser from "./adminpages/newUser/NewUser";
import './App.css';
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      {/* <Route path="/register" element={<NewUser/>}></Route> */}
        <Route path="/iron" element={<Iron/>}></Route>
     </Routes>
     {/* <Footer/> */}
    </div>
  )}

export default App;
