import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Padaria do Manoel</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Padaria do Manoel
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/comanda">Comandas</Nav.Link>
                <Nav.Link href="/movimento">Movimentos</Nav.Link>
                <NavDropdown
                  title="Produtos"
                  id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                  <NavDropdown.Item href="/produtos">
                    Lista de Produtos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categoria">
                    Categorias
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/unidadeMedida">
                    Unidade de medida
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Usuarios"
                  id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                  <NavDropdown.Item href="/usuarios">
                    Lista de Usuários
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/perfil">Perfis</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
