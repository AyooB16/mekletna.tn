import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

  labelPlat: Yup.string()
      .min(4, "Libellé plat minimum 4 caracteres")
      .max(30, "Libellé plat maximum 50 caracteres")
      .required("Ce champ est obligatoire"),
  category: Yup.string()
      .required("Ce champ est obligatoire"),
  subcategory: Yup.string()
      .required("Ce champ est obligatoire"),
  subcategory2: Yup.string()
      .required("Ce champ est obligatoire"),
  descripton: Yup.string()
      .min(8, "Descripton minimum 8 caracteres")
      .max(50, "Descripton maximum 50 caracteres")
      .required("Ce champ est obligatoire"),
  type: Yup.string()
      .required("Ce champ est obligatoire"),
  nbPersonne:Yup.number()
      .required("Ce champ est obligatoire")
      .min(1,"Minimum une personne")
      .max(4,"Maximum 4 personnes"),
  price:Yup.number()
      .required("Ce champ est obligatoire")
      .min(1,"Minimum 1 DT")
      .max(200,"Maximum 200 DT"),
    

  email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),


});
const categories = [
    {
      id:0,
      label:"Pate",
      value:"pate",
      subcategories:[
        { id:0,
          label: "Ma9rouna",
          value: "ma9rouna" ,
          subcategories2 : [{
              id:0,
              label: "3alouch",
              value: "3alouch" ,
            },
            {
              id:1,
              label: "ba9ri",
              value: "ba9ri" ,
            },
            {
              id:2,
              label: "djej",
              value: "djej" ,
            }
          ]
        },
        { id:2,
          label: "Couscous",
          value: "couscous" ,
          subcategories2 : [{
              id:0,
              label: "3alouch",
              value: "3alouch" ,
            },
            {
              id:1,
              label: "3osben",
              value: "3osben" ,
            }
          ]
        }
      ]
    },
    {
      id:1,
      label:"Mro9",
      value:"mro9",
      subcategories:[
        { id:0,
          label: "Batata",
          value: "batata" ,
          subcategories2 : [{
              id:0,
              label: "3alouch",
              value: "3alouch" 
            },
            {
              id:1,
              label: "djej",
              value: "djej" 
            }
          ]
        }
      ]
    }
  ];
 
const AddPlat = () => {
  return (
    <Formik
      initialValues={{
        labelPlat: '',
        lastname: '',
        email: '',
        country: '',
        state: '',
        zip: '' 
      }}
      validationSchema = {validationSchema}
      onSubmit={() => {
       console.log('form submitted')
      }}
    >
      { ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
      <div className="container">

        <div className="col-md-12 mt-5">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-3">Personal information</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="labelPlat">First name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="labelPlat" 
                  name="labelPlat" 
                  value={values.labelPlat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.labelPlat && touched.labelPlat ?
                  <span style={{color: 'red'}}>
                    {errors.labelPlat}
                  </span>
                : null} 
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="lastname" 
                  name="lastname" 
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ?
                  <span style={{color: 'red'}}>
                    {errors.lastname}
                  </span>
                : null} 
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                placeholder="you@example.com" 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ?
                <span style={{color: 'red'}}>
                  {errors.email}
                </span>
              : null} 
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select 
                  className="custom-select d-block w-100" 
                  id="country" 
                  name="country" 
                  value={values.country}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="NIG">Nigeria</option>
                  <option value="GH">Ghana</option>
                  <option value="SA">South Africa</option>
                </select>        
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select 
                  className="custom-select d-block w-100" 
                  id="state" 
                  name="state" 
                  value={values.state}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="lagos">Lagos</option>
                  <option value="east legion">East Legion</option>
                  <option value="cape town">Cape Town</option>
                </select>             
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="zip" 
                  name="zip" 
                  value={values.zip}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
             Submit
            </button>
          </form>
        </div>

      </div>
      ) }
    </Formik>
  )
}

export default AddPlat