import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp/SignUp';
import AddPlat from './components/AddPlat/AddPlat';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import ListPlats from './components/ListPlats/ListPlats';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Panier from './components/Panier/Panier';
import Checkout from './components/Checkout/Checkout';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0932c",
      contrastText: '#f5f5ed',
    }
  },
});
function App() {
  return (
   
     <>
      <Router>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/panier' element={<Panier/>} />
          <Route path='/ajouter-plat' element={<AddPlat/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/reset-password' element={<ResetPassword/>} />
          <Route path='/plat' element={<ListPlats/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </ThemeProvider>
      </Router>
     </>
   
  );
}

export default App;
