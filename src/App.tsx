import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./contexts/ProductContext";
import CreateProduct from "./pages/CreateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <main className="main-content p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/favorites" element={<Favorites />} />
          <Route path="/product/new" element={<CreateProduct />} />
        </Routes>
      </main>
    </ProductProvider>
  );
}

export default App;
