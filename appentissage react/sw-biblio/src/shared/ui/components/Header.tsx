import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  console.info('Header');
  //let title = 'React-Bootstrap';
  const [title, setTitle] = useState('React title');

  const changeTitle = () => {
    // title = 'Ma bibliothèque SW';
    setTitle('Ma bibliothèque SW'); // Ca va redemander le rendu du DOM virtuel, puis si différence du DOM réel
    // Par rendu, j'entends : ré exécution de la fonction de ce composant
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/people">Les personnages</Nav.Link>
              <Nav.Link as={Link} to="/films">Mes films</Nav.Link>
              <Nav.Link as={Link} to="/films/new">Nouveau film</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <button onClick={changeTitle}>Change title</button>
    </>
  );
  
};
