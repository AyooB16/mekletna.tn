import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import MenuItem from '@mui/material/MenuItem';

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
  const validationSchema = Yup.object().shape({
    namePlat: Yup.string()
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
  });
const handleSubmit = (values) => {
     
    console.log(values)
  };

  const initialValues = 
  {
    namePlat:"",
    category: "",
    subcategory: "",
    subcategory2: "",
    descripton: "",
    type: "",
    nbPersonne: "",
    price:0
  };

const AddPlat = () => {
  const [selectedCategory, setSelectedCategory] = useState({});
  return (
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
    
        <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
          <Form  className="register-form" id="register-form" >
            <h4 className="mb-3">Personal information</h4>

            <div>
              <TextField
                    required
                    type="text" 
                    id="namePlat" 
                    name="namePlat" 
                    label="Nom du plat"
                    value={values.namePlat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.namePlat && touched.namePlat ?     
                      true
                    : null}
                    helperText=  {errors.namePlat && touched.namePlat ?     
                      errors.namePlat
                    : null}
                  />       
              </div>
              <div >
                <TextField
                  required
                  select
                  id="category" 
                  name="category" 
                  label="Categorie"
                  value={values.category}
                  onChange={handleChange }
                  onBlur={handleBlur}
                  error={errors.category && touched.category ?     
                    true
                  : null}
                  helperText=  {errors.category && touched.category ?     
                    errors.category
                  : null}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div >

                    {values.category!=="" ?
                                               
                      <TextField
                      required
                      type="text" 
                      
                      id="subcategory" 
                      name="subcategory" 
                      label="Sous categorie"
                      value={values.subcategory}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.subcategory && touched.subcategory ?     
                        true
                      : null}
                      helperText=  {errors.subcategory && touched.subcategory ?     
                        errors.subcategory
                      : null}
                      select
                    >
                    {categories.find(({ value }) => value === values.category).subcategories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
          
                    </TextField>
                    : null}
              </div>
            

            <div >
            {values.subcategory!=="" ?     
                      <TextField
                      required
                      type="text" 
                      id="subcategory2" 
                      name="subcategory2" 
                      label="subcategory2"
                      value={values.subcategory2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.subcategory2 && touched.subcategory2 ?     
                        true
                      : null}
                      helperText=  {errors.subcategory2 && touched.subcategory2 ?     
                        errors.subcategory2
                      : null}
                      select
                    >
                    {categories.find(({ value }) => value === values.category).subcategories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
          
                    </TextField>
                    : null}
            </div>

          

              <div>
                 <TextField
                    required
                    type="text" 
                    id="descripton" 
                    name="descripton" 
                    label="descripton"
                    value={values.descripton}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.descripton && touched.descripton ?     
                      true
                    : null}
                    helperText=  {errors.descripton && touched.descripton ?     
                      errors.descripton
                    : null}
                  /> 
                  <TextField
                      required
                      type="text" 
                      id="type" 
                      name="type" 
                      label="type"
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.type && touched.type ?     
                        true
                      : null}
                      helperText=  {errors.type && touched.type ?     
                        errors.type
                      : null}
                  /> 
                  <TextField
                      required
                      type="number" 
                      id="nbPersonne" 
                      name="nbPersonne" 
                      label="nbPersonne"
                      value={values.nbPersonne}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.nbPersonne && touched.nbPersonne ?     
                        true
                      : null}
                      helperText=  {errors.nbPersonne && touched.nbPersonne ?     
                        errors.nbPersonne
                      : null}
                  /> 
                  <TextField
                      required
                      type="number" 
                      id="type" 
                      name="price" 
                      label="price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.price && touched.price ?     
                        true
                      : null}
                      helperText=  {errors.price && touched.price ?     
                        errors.price
                      : null}
                  /> 
              </div>
              <div >

              </div>

            <hr className="mb-4"/>
            <input type="submit" className="form-submit" value="Register"/>
            </Form>
           </Box>
           
      ) }
    </Formik>
  )
}

export default AddPlat