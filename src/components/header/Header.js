
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

function Header({ handler }) {
  return (
    <Navbar bg="primary" className='nav-styling' expand="lg">
      <Container fluid>
        <Navbar.Brand className='nav_band' href="#">Country Charm</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav_link' name='All' onClick={handler} href="#action1">Home</Nav.Link>
            <Nav.Link className='nav_link' name='Food' onClick={handler} href="#action2">Food</Nav.Link>

            <Nav.Link className='nav_link' name='Hotel' onClick={handler} href="#action3" >Hotel</Nav.Link>
            <Nav.Link className='nav_link' name='Place' onClick={handler} style={{ marginRight: '220px' }} href="#action4" >Places</Nav.Link>

            {/*these two are the links for add a post and search a post i have given the classname as features
            because these two are the features of review site*/}
            <Nav.Link className='features_link' href="#action5" >Add a Post</Nav.Link>
            <Nav.Link className='features_link' href="#action6" >Search a Post</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;