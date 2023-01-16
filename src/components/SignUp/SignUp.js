import "./SignUp.css"
import SignUpImage from '../../assets/signup-image.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
      .min(5, "trop petit")
      .max(50, "trop long!")
      .required("Ce champ est obligatoire"),
  username: Yup.string()
      .min(2, "trop petit")
      .max(10, "trop long!")
      .required("Ce champ est obligatoire"),
  phone: Yup.string()
      .length(8, "Le numéro de téléphone doit être 8 chiffres")
      .required("Ce champ est obligatoire"),
  adress: Yup.string()
      .min(8, "Adresse invalide")
      .max(50, "trop long!")
      .required("Ce champ est obligatoire"),
  email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
  password: Yup.string()
      .required("Mot de passe est obligatoire")
      .min(8, "Mot de passe doit être plus grand que 8 caractères")
      .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string()
      .required("Confirmation de mot de passe est obligatoire")
      .oneOf(
          [Yup.ref("password"), null],
          "Le mot de passe de confirmation ne correspond pas"
      ),
});
const initialValues = {
  name: "",
  username: "",
  adress:"",
  email: "",
  password: "",
  confirmPassword: "",
};
const handleSubmit = (values) => {
  console.log(values)
};
const SignUp = () => {

  return (
    <section className="signup">
    <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                >
                {() => (
                  <Form  className="register-form" id="register-form" >
                      <div className="form-group">
                          <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                          <Field type="text" name="name" id="name" placeholder="Nom et Prenom"/>
                          <ErrorMessage
                                        name="name"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      <div className="form-group">
                          <label htmlFor="username"><i className="zmdi zmdi-account-o material-icons-name"></i></label>
                          <Field type="text" name="username" id="username" placeholder="Nom d'utilisateur"/>
                          <ErrorMessage
                                        name="username"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      <div className="form-group">
                          <label htmlFor="adress"><i className="zmdi zmdi zmdi-pin material-icons-name"></i></label>
                          <Field type="text" name="adress" id="adress" placeholder="Adresse"/>
                          <ErrorMessage
                                        name="adress"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      <div className="form-group">
                          <label htmlFor="phone"><i className="zmdi zmdi-phone material-icons-name"></i></label>
                          <Field type="text" name="phone" id="phone" placeholder="Numéro de téléphone"  />
                          <ErrorMessage
                                        name="phone"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                          <Field type="email" name="email" id="email" placeholder="Email"/>
                          <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      <div className="form-group">
                          <label htmlFor="password"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                          <Field type="password" name="password" id="password" placeholder="Mot de passe"/>
                          <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      <div className="form-group">
                          <label htmlFor="confirmPassword"><i className="zmdi zmdi-lock-outline material-icons-name"></i></label>
                          <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Repeter mot de passe"/>
                          <ErrorMessage
                                        name="confirmPassword"
                                        component="small"
                                        className="text-danger"
                                    />
                      </div>
                      {/* <div className="form-group">
                          <input type="checkbox" name="acceptTerms" id="acceptTerms" className="agree-term" />
                          <label htmlFor="acceptTerms" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                      </div> */}
                      <div className="form-group form-button">
                      <input type="submit" className="form-submit" value="Register"/>
                      </div>
                  </Form>
                  )}
                </Formik>
            </div>
            <div className="signup-image">
                <figure><img src={SignUpImage} alt="sing up image"/></figure>
                <a href="#" className="signup-image-link">I am already member</a>
            </div>
        </div>
    </div>
</section>
  )

}

export default SignUp
