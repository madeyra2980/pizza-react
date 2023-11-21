import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route , Routes} from "react-router-dom";
import Cart from './pages/Cart'
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Home searchValue={searchValue}/>}/>
              <Route path="/home" element={<Home searchValue={searchValue}/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
