import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Recipes from './components/Recipes';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
      <Router>
        <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <Link to="/">Home</Link>
          </Navbar.Brand>
          
          <Nav className="me-auto" >
            <Nav.Link >
              <Link to="/Recipes">Recipes</Link>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
   
        
       
      <div className='display'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Recipes' element={<Recipes/>} />
        </Routes>
      </div>
      </Router>;
    </div>
  );
}

export default App;