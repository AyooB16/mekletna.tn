import "./SignUp.css"
import SignUpImage from '../../assets/signup-image.jpg';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import "yup-phone";

const validationSchema = Yup.object().shape({

  name: Yup.string()
      .min(5, "Nom et pernom invalide")
      .max(30, "Nom et pernom invalide")
      .required("Ce champ est obligatoire"),
  username: Yup.string()
      .min(5, "Nom d'utilisateur doit etre minimum 5 caracteres")
      .max(20, "Nom d'utilisateur doit etre maximum 20 caracteres")
      .required("Ce champ est obligatoire"),
  phone: Yup.string()
      .phone("TN","Numéro de téléphone est invalide")
      .required("Ce champ est obligatoire"),
  adress: Yup.string()
      .min(8, "Adresse invalide")
      .max(50, "Adresse invalide")
      .required("Ce champ est obligatoire"),
type: Yup.string()
      .required("Ce champ est obligatoire")
      .oneOf(["client","traiteur"],"Invalide type"),
  email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
  password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*+-])(?=.{8,})/,
        "Minimum 8 caractères, Caractère majuscule, Caractère minuscule, Nombre et un Caractère speciale")
      .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string()
      .required("Confirmation de mot de passe est obligatoire")
      .oneOf(
          [Yup.ref("password"), null],
          "Le mot de passe de confirmation ne correspond pas"
      ),
  acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),

});
const initialValues = {
  name:"",
  username:"",
  adress:"",
  phone:"",
  email:"",
  type:"",
  password:"",
  confirmPassword:"",
  acceptTerms:false,
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
                { ({
                    values,

                    handleChange,

                }) => (
                  <Form  className="register-form" id="register-form" >
                      <div className="form-group">
                          <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                          <Field type="text" name="name" id="name" placeholder="Nom et Prenom"/>
                      </div>
                      <ErrorMessage
                                        name="name"
                                        component="small"
                                        className="text-danger"
                                    />
                      <div className="form-group">
                          <label htmlFor="username"><i className="zmdi zmdi-account-o material-icons-name"></i></label>
                          <Field type="text" name="username" id="username" placeholder="Nom d'utilisateur"/>
                      </div>
                      <ErrorMessage
                                        name="username"
                                        component="small"
                                        className="text-danger"
                            />
                      <div className="form-group">
                          <label htmlFor="selectedType"><i className="zmdi zmdi-accounts-alt material-icons-name"></i></label>
                          <select 
                                id="type" 
                                name="type"
                                className="form-select form-select-sm select-new-padding"
                                value={values.type}
                                onChange={handleChange}
                                placeholder="Selectioner le type de compte"
                                >
                                <option value="" disabled>Selectioner le type de compte</option>
                                <option value="client">Client</option>
                                <option value="traiteur">Traiteur</option>
                           </select>
                      </div>
                      <ErrorMessage
                                        name="type"
                                        component="small"
                                        className="text-danger"
                                    />
                      <div className="form-group">
                          <label htmlFor="adress"><i className="zmdi zmdi-pin material-icons-name"></i></label>
                          <Field type="text" name="adress" id="adress" placeholder="Adresse"/>
                      </div>
                      <ErrorMessage
                                        name="adress"
                                        component="small"
                                        className="text-danger"
                                    />
                      <div className="form-group">
                          <label htmlFor="phone"><i className="zmdi zmdi-phone material-icons-name"></i></label>
                          <Field type="text" name="phone" id="phone" placeholder="Numéro de téléphone"  />
                      </div>
                      <ErrorMessage
                                        name="phone"
                                        component="small"
                                        className="text-danger"
                                    />
                      <div className="form-group">
                          <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                          <Field type="email" name="email" id="email" placeholder="Email"/>
                      </div>
                      <ErrorMessage
                                        name="email"
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
                      <div className="form-group">
                          <label htmlFor="confirmPassword"><i className="zmdi zmdi-lock-outline material-icons-name"></i></label>
                          <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Repeter mot de passe"/>
                      </div>
                      <ErrorMessage
                                        name="confirmPassword"
                                        component="small"
                                        className="text-danger"
                                    />
                      <div className="form-group">
                          <Field type="checkbox" name="acceptTerms" id="acceptTerms" className="agree-term" />
                          <label htmlFor="acceptTerms" className="label-agree-term"><span><span></span></span>J'ai lu et j'accepte les  <a href="#" className="term-service">Termes et Conditions  </a></label>
                      </div>
                      <ErrorMessage
                                        name="acceptTerms"
                                        component="small"
                                        className="text-danger"
                                    />
                      <div className="form-group form-button">
                      <input type="submit" className="form-submit" value="Register"/>
                      </div>
                  </Form>
                  )}
                </Formik>
            </div>
            <div className="signup-image">
                <figure><img src={SignUpImage} alt="sing up image"/></figure>
                <Link to={"/signin"} className="signup-image-link">J'ai déjà un compte</Link>
            </div>
        </div>
    </div>
</section>
  )

}

export default SignUp
