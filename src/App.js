import NavbarApp from "./components/NavbarApp";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarApp/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home/" element={<Home/>}/>
          <Route path="/contacto" element={<Favoritos/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;