import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStorePage from "./pages/AddStorePage";
import Home from "./pages/Home";
import Store from "./Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="stores" element={<Store />} />
        <Route path="stores/add-store" element={<AddStorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
