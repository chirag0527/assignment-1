import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ShowContainer from "./components/ShowContainer";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ShowContainer movie={movie} setMovie={setMovie} />}
          />
          <Route
            path="/show/:id"
            element={<ShowDetails movie={movie} setMovie={setMovie} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
