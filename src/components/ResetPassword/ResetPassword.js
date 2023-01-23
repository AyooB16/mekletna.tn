import "./ResetPassword.css";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { FormControl } from "@mui/material";


const theme = createTheme();
const validationSchema = Yup.object().shape({
    password: Yup.string()
    .required("Mot de passe est obligatoire")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*+-])(?=.{8,})/,
      "Minimum 8 caractères, Caractère majuscule, Caractère minuscule, Nombre et un Caractère speciale"
    )
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),
confirmPassword: Yup.string()
    .required("Confirmation de mot de passe est obligatoire")
    .oneOf(
        [Yup.ref("password"), null],
        "Le mot de passe de confirmation ne correspond pas"
    ),
  
  });
const initialValues = {
    password: "",
    confirmPassword: "",
  };
const handleSubmit = (values) => {
     
    console.log(values)
  };
const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <ThemeProvider theme={theme}  >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">           
              Choisissez un mot de passe
              </Typography>
              <Typography component="h5"  sx={{ m: 2, color: 'gray' , textAlign:'center' }} >           
             Le mot de passe doit contenir au minimum 8 caractères, au moins une lettre minuscule, une lettre majuscule, un caractère spécial et un chiffre.
              </Typography>
              <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                >
                { ({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur
                }) => (
                  <Form  className="register-form" id="register-form" >
                <Grid container spacing={2}>
                <FormControl fullWidth sx={{ ml: 3 ,mr: 1,mb: 1 ,mt: 1 }}    xs={12} >
                    <InputLabel
                        error={errors.password && touched.password ?     
                          true
                        : null} htmlFor="password">Nouveau mot de passe</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="Clicker pour afficher le mot de passe"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                       
                        id="password" 
                        name="password" 
                        label="Nouveau mot de passe"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.password && touched.password ?     
                          true
                        : null}
     
                    /> 
 
                </FormControl>
                <FormControl fullWidth sx={{ ml: 3 ,mr: 1,mb: 1 ,mt: 1 }}    xs={12} >
                    <InputLabel
                        error={errors.confirmPassword && touched.confirmPassword ?     
                          true
                        : null} htmlFor="confirmPassword">Confirmer nouveau mot de passe</InputLabel>
                    <OutlinedInput
                        type={showConfirmPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="Clicker pour afficher le mot de passe de confirmation"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                       
                        id="confirmPassword" 
                        name="confirmPassword" 
                        label="Confirmer nouveau mot de passe"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.confirmPassword && touched.confirmPassword ?     
                          true
                        : null}
                    />   
                </FormControl>
                  
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Modifier le mot de passe
                </Button>
                </Form>
                  )}
                </Formik>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to={"/signin"} >
                    Vous ne parvenez pas à réinitialiser votre mot de passe ?                    
                    </Link>
                  </Grid>
                </Grid>
              </Box>
          </Container>
        </ThemeProvider>
        )
}

export default ResetPassword