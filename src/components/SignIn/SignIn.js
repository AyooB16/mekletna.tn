import "./SignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Form } from "formik";
import { Formik } from 'formik';
import SignInImage from '../../assets/shutterstock_780590413.jpg';
import Users from "../../json/users.json";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Nom d'utilisateur est obligatoire")
    .min(5, "Nom et pernom invalide"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe invalide")

});
const initialValues = {
  username: "",
  password: "",
};

const handleSubmit = (values, setConnectedUser) => {
  setConnectedUser(Users.find(element => {
    if (element.username === values.username && element.password === values.password) {
      return true;
    }
    return false;
  })
  )
};

const SignIn = () => {
  const [connectedUser, setConnectedUser] = useState("");
  let message;
  if (connectedUser !== "") {
    if (connectedUser) {
      message = <small className="text-success">Connected</small>
    }
    else if (!connectedUser) {
      message = <small className="text-danger">Nom d'utilisateur ou mot de passe invalide</small>
    }
  }
  return (

    <section className="sign-in">
      <Grid container className="container-fluid" component="main" sx={{ height: '100vh' }}>

        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          sx={{
            backgroundImage: `url(${SignInImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={6} elevation={6} >
          <Box

            sx={{
              my: 6,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 className="form-title">Connexion</h2>
            {message}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values, setConnectedUser)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              }) => (


                <Form id="login-form" sx={{ mt: 1 }}>
                  <TextField
                    required
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.username && touched.username ?
                      true
                      : null}
                    helperText={errors.username && touched.username ?
                      errors.username
                      : null}
                    margin="normal"
                    fullWidth
                    name="username"
                    label="Nom d'utilisateur"
                    type="text"
                    id="username"
                  />
                  <TextField
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password ?
                      true
                      : null}
                    helperText={errors.password && touched.password ?
                      errors.password
                      : null}
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  />

                    <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{ mt: 3, mb: 2  }}
                    >
                    S'identifier
                    </Button>


                  <Grid container>
                    <Grid item xs>
                      <Link to={"/forgot-password"} className="forgot-pass-link" variant="body2">Mot de passe oublié ?</Link>
                    </Grid>
                    <Grid item>
                      <Link to={"/signup"} className="signup-image-link" variant="body2">Créer un compte</Link>
                    </Grid>
                  </Grid>


                </Form>



              )}
            </Formik>
          </Box>
        </Grid>

      </Grid>

    </section>

  )
}

export default SignIn