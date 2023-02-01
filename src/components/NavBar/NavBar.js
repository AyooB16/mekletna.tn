import { Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './NavBar.css'
import LogoImg from '../../assets/logo.png';
import ChefAvatar from '../../assets/chef.png';
import ProfileAvatar from '../../assets/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    const [anchorElNav, setAnchorElNav] =useState(null);
    const [anchorElUser, setAnchorElUser] =useState(null);
    const dispatch = useDispatch();
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    let navbar;
    const user = useSelector(state => state.connectedUser);
    const [cart, setCart] = useState([]);
    useEffect(() => {
      if (localStorage.getItem("cart")){
          setCart(JSON.parse(localStorage.getItem("cart")));
      }
    },[localStorage.getItem("cart")]);
    
    const navigate = useNavigate();

    if(user){
      if(user.type=="traiteur"){
        navbar = <>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            
              <MenuItem onClick={handleCloseNavMenu} component={Link} to={"/ajouter-plat"}>
                <Typography textAlign="center">Ajouter Produit</Typography>
              </MenuItem>
          </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              
              component={Link}
              onClick={handleCloseNavMenu}
              to={"/ajouter-plat"} 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Ajouter Plat
            </Button>
  
            <Button
              
              component={Link}
              onClick={handleCloseNavMenu}
              to="/signup" 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              SignUp
            </Button>
            
            <Button
              
              component={Link}
              onClick={handleCloseNavMenu}
              to="/signin" 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              SignIn
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ChefAvatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={()=>{handleCloseUserMenu(); dispatch({ type : "SIGN_OUT"})}}>
                    <Typography textAlign="center">Se déconnecter</Typography>
                  </MenuItem>
              </Menu>
            </Box>
        </>
  
  
      }
      else if(user.type=="client"){
        navbar = <>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to={"/plat"}>
              <Typography textAlign="center">Plats</Typography>
            </MenuItem>
        </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
              
              component={Link}
              onClick={handleCloseNavMenu}
              to={"/plat"} 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Plats
            </Button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ProfileAvatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={()=>{handleCloseUserMenu(); dispatch({ type : "SIGN_OUT"})}}>
                    <Typography textAlign="center">Se déconnecter</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            <Badge className="ms-4" badgeContent={cart.length} color="secondary"  >
              <ShoppingCartIcon role="button" sx={{ fontSize: 30 }} onClick={()=>{navigate("/panier")}} />
            </Badge>
      </>
      }
    }
    else{
      navbar = <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to={"/signup"}>
              <Typography textAlign="center">Sign Up</Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to={"/signin"}>
              <Typography textAlign="center">Sign In</Typography>
            </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1,justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>

        <Button
          
          component={Link}
          onClick={handleCloseNavMenu}
          to="/signup" 
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          SignUp
        </Button>
        
        <Button
          
          component={Link}
          onClick={handleCloseNavMenu}
          to="/signin" 
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          SignIn
        </Button>
      </Box>
    </>
    }

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              width : 150
            }}
          >
            <img src={LogoImg}/>
          </Typography>

          {navbar}

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar