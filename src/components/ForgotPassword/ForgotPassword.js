import "./ForgotPassword.css";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),

});
const initialValues = {
  email: "",
};
const handleSubmit = (values) => {
     
  console.log(values)
};

const ForgotPassword = () => {
    return (
        
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
                  Problèmes de connexion ?
              </Typography>
              <Typography component="h5"  sx={{ m: 2, color: 'gray' , textAlign:'center' }} >           
              Entrez votre adresse e-mail et nous vous enverrons un lien pour récupérer votre compte.
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

                  <Grid  item xs={12}>
                  <TextField
                    fullWidth
                    type="email" 
                    id="email" 
                    name="email" 
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email ?     
                      true
                    : null}
                    helperText=  {errors.email && touched.email ?     
                      errors.email
                    : null}
                  />
                                  
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Envoyer un lien de connexion
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
        
      );
}

export default ForgotPassword