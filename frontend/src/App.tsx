import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import "./App.css";
import { MovieProvider } from "./contexts/MovieContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
