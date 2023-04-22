import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="text-danger fw-bolder mx-4">Images from diffent City around the world</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Taiwan(台灣)" id="navbarScrollingDropdown" className="fw-bolder lh-lg mx-4" >
                <Link to="/taipei" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Taipei(台北)</NavDropdown.Item>
                </Link>
                <Link to="/taichung" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Taichung(台中)</NavDropdown.Item>
                </Link>
                <Link to="/kaohsiung" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Kaogsiung(高雄)</NavDropdown.Item>
                </Link>
                <Link to="/hualien" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Hualein(花蓮)</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Deutschland(德國)" id="navbarScrollingDropdown" className="fw-bolder lh-lg mx-4">
                <Link to="/berlin" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Berlin(柏林)</NavDropdown.Item>
                </Link>
                <Link to="/munchen" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">München(慕尼黑)</NavDropdown.Item>
                </Link>
                <Link to="/frank" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Frankfurt(法蘭克福)</NavDropdown.Item>
                </Link>
                <Link to="/klon" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Köln(科隆))</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Japan(日本)" id="navbarScrollingDropdown" className="fw-bolder lh-lg mx-4">
                <Link to="/tokyo" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Tokyo(東京都)</NavDropdown.Item>
                </Link>
                <Link to="/sapporo" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Sapporo(札幌)</NavDropdown.Item>
                </Link>
                <Link to="/kyoto" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Kyoto(京都)</NavDropdown.Item>
                </Link>
                <Link to="/nagoya" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Nagoya(名古屋)</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title=" United States(美國)" id="navbarScrollingDropdown" className="fw-bolder lh-lg mx-4">
                <Link to="/newyork" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">NewYork(紐約)</NavDropdown.Item>
                </Link>
                <Link to="/boston" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Boston(波士頓)</NavDropdown.Item>
                </Link>
                <Link to="/los" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Los Angeles(洛杉磯)</NavDropdown.Item>
                </Link>
                <Link to="/sea" style={{ textDecoration: 'none' }}><NavDropdown.Item href="#action3">Seattle(西雅圖)</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent;
