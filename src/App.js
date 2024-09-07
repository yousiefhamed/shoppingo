import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarPage from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <NavbarPage />
        <Container>
          <Routes>
            <Route path="/" element={<ProductsContainer />} />
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Container>
      </Router>
    </ProductProvider>
  );
}

export default App;
