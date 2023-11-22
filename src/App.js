import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route , Routes} from "react-router-dom";
import Cart from './pages/Cart'
import { createContext, useState } from "react";
export const appContext = createContext('')
function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
  
  <appContext.Provider value={{searchValue, setSearchValue}}>  
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
</appContext.Provider>

  );
}

export default App;
