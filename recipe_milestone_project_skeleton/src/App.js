import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home';
<<<<<<< HEAD
import addRecipe from './components/addRecipes';
=======
import Cuisine from './components/Cuisine';

>>>>>>> 77a3b8dc6801d1f784cecd6d4bea98d4c98b7efe

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
              <Link to="/Cuisine">Cuisine</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/addRecipe">add page</Link>
            </Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
   
        
       
      <div className='display'>
        <Routes>
          <Route path='/' element={<Home/>} />
<<<<<<< HEAD
          <Route path='/Recipes' element={<Recipes/>} />
          <Route path='/addPage' element={<addRecipe/>} />
=======
          <Route path='/cuisine' element={<Cuisine/>} />
>>>>>>> 77a3b8dc6801d1f784cecd6d4bea98d4c98b7efe
        </Routes>
      </div>
      </Router>;
    </div>
  );
}

export default App;