import {Routes,Route} from "react-router-dom"
import './App.css';
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/checkout" element={<Checkout/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
