import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp/SignUp';
import AddPlat from './components/AddPlat/AddPlat';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
   
     <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ajouter-plat' element={<AddPlat/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </Router>
     </>
   
  );
}

export default App;
