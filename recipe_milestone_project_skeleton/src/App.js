import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home';
import AddRecipes from './components/addRecipes';
import Cuisine from './components/Cuisine';
import ShowCuisine from './components/ShowCuisine';
import ShowRecipe from './components/ShowRecipe';
import EditRecipe from './components/editRecipes';
import AddIngredient from './components/AddIngredient';
import EditIngredient from './components/EditIngredient';

export default App;
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand href="/">
                <Link to="/" style={{ textDecoration: 'none', color: '#ffffcc', display: 'inline-block', fontSize: '1em', textTransform: 'uppercase', padding: '5px', textAlign: 'left', borderRadius: '15%' }}>Home</Link>
              </Navbar.Brand>
              <Nav className="me-auto" >
                <Nav.Link >
                  <Link to="/Cuisine" style={{ textDecoration: 'none', color: '#ffffcc', display: 'inline-block', fontSize: '1.2em', textTransform: 'uppercase', padding: '5px', textAlign: 'left', borderRadius: '15%' }}>Cuisine</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/addRecipes" style={{ textDecoration: 'none', color: '#ffffcc', display: 'inline-block', fontSize: '1.2em', textTransform: 'uppercase', padding: '5px', textAlign: 'left', borderRadius: '15%' }}>Add Recipes</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <div className='display'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addRecipes' element={<AddRecipes />} />
            <Route path='/addIngredient' element={<AddIngredient />} />
            <Route path='/cuisine' element={<Cuisine />} />
            <Route path='/cuisine/:id' element={<ShowCuisine />} />
            <Route path='/recipe/:id' element={<ShowRecipe />} />
            <Route path='/recipe/edit/:id' element={<EditRecipe />} />
            <Route path='/ingredient/edit/:id' element={<EditIngredient />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
