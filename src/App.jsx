import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStorePage from "./pages/AddStorePage";
import Store from "./Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="add-store" element={<AddStorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
