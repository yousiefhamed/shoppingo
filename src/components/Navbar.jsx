import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function NavbarPage() {
  const { cartItems } = useProductContext();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Shoppingo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products/laptop">
                Laptop
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/mobile">
                Mobile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products/separated-link">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/wishlist">
              <FaHeart />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart /> ({cartItems.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
