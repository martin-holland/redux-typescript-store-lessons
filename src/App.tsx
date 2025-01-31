import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
