import {Routes,Route} from "react-router-dom"
import './App.css';
import Checkout from "./pages/Checkout";
import Page from "./pages/Page";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/page" element={<Page/>}></Route>
      <Route path="/cartpage" element={<CartPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
