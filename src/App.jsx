import {BrowserRouter, Routes, Route} from "react-router-dom";
import Store from "./Store";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
