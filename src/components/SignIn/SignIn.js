import "./SignIn.css";
import { useState } from "react";
import SignInImage from '../../assets/signin-image.jpg';
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { Link } from "react-router-dom";
import Users from "../../json/users.json";
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
  if(connectedUser!==""){
    if(connectedUser){
      message=<small className="text-success">Connected</small>
    }
    else if(!connectedUser){
      message=<small className="text-danger">Nom d'utilisateur ou mot de passe invalide</small>
    }
  }
  

  return (
    
    <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={SignInImage} alt="sing up image"/></figure>
                        <Link to={"/signup"} className="signup-image-link">Créer un compte</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <Formik
                          initialValues={initialValues}
                          validationSchema={validationSchema}
                          onSubmit={(values) =>handleSubmit(values,setConnectedUser)}
                        >
                        { ({
                            values,
                            handleChange,

                        }) => (
                          <Form  className="register-form" id="login-form">
                              <div className="form-group">
                                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                  <Field type="text" name="username" id="username" placeholder="Username"/>
                                  
                              </div>
                              <ErrorMessage
                                                name="username"
                                                component="small"
                                                className="text-danger"
                                            />
                              <div className="form-group">
                                  <label htmlFor="password"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                  <Field type="password" name="password" id="password" placeholder="Mot de passe"/>
                                  
                              </div>
                              <ErrorMessage
                                                name="password"
                                                component="small"
                                                className="text-danger"
                                            />
                              {message}
                              <Link to={"/forgot-password"} className="forgot-pass-link">Mot de passe oublié ?</Link>
                              
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                             
                          </Form>
                          )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default SignIn