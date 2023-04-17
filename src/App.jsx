import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import EntirePage from "./Components/EntirePage/EntirePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<EntirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;