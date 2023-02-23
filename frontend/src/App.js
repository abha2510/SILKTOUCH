
import {Routes,Route} from "react-router-dom"
import './App.css';
//import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
