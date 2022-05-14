import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Create from "./Create";
import Edit from "./Edit";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
