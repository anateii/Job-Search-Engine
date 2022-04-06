import { Container, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Container>
      <Navbar className="navbar">
        <Navbar.Brand>
          <div id="icons-wrapper">
            <i class="bi bi-house-door-fill"></i>
            <Link to="/"> Home</Link>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <div id="icons-wrapper">
            <i class="bi bi-heart-fill"></i>
            <Link to="/favourites"> Favourites</Link>
          </div>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
