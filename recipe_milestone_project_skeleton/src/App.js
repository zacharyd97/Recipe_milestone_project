import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home';
import Cuisine from './components/Cuisine';


function App() {

  return (
    <div className="App">
      <Router>
        <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link >
              <Link to="/Cuisine">Cuisine</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>

      <div className='display'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cuisine' element={<Cuisine/>} />
        </Routes>
      </div>
      </Router>

    </div>
  );
}

export default App;