import { useState } from "react";
import Grid from "@mui/material/Grid";
import './AddPlat.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import MenuItem from '@mui/material/MenuItem';
const typePlats=[
  {id:0 , label:"Entrées" , value:"entree"},
  {id:1 , label:"Plat principal" , value:"principal"},
  {id:2 , label:"Desserts" , value:"dessert"},
]
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
        .max(250, "Descripton maximum 250 caracteres")
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
  const [selectedSubategory, setSelectedSubategory] = useState({});

  return (
    <div className="form-container">
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
    
        <Box>
          <Form id="add-plat" >
            <h4 className="mb-3">Ajouter Plat</h4>

            <div>
              <TextField
               sx={{m: 1, width: '30ch'} }
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
                  <TextField
                      sx={{m: 1, width: '30ch'} }
                      required
                      select
                      type="text" 
                      id="type" 
                      name="type" 
                      label="Type"
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.type && touched.type ?     
                        true
                      : null}
                      helperText=  {errors.type && touched.type ?     
                        errors.type
                      : null}
                  >
                      {typePlats.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </TextField>
                 
              </div>
              <div >

              </div>
              <div >
                  <TextField
                    sx={{m: 1, width: '30ch'} }
                      required
                      select
                      id="category" 
                      name="category" 
                      label="Catégorie"
                      value={values.category}
                      onChange={(e)=>{handleChange(e); values.subcategory="";  setSelectedCategory(categories.find(({ value }) => value === e.target.value));} }
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
                    {values.category!==""  ?                  
                        <TextField
                        required
                        type="text" 
                        sx={{m: 1, width: '30ch'} }
                        id="subcategory" 
                        name="subcategory" 
                        label="Sous-catégorie"
                        value={values.subcategory}
                        onChange={(e)=>{handleChange(e);
                          setSelectedSubategory(selectedCategory.subcategories.find(({ value }) => value === e.target.value));
                          values.subcategory2="";
                        } 
                          }
                        onBlur={handleBlur}
                        error={errors.subcategory && touched.subcategory ?     
                          true
                        : null}
                        helperText=  {errors.subcategory && touched.subcategory ?     
                          errors.subcategory
                        : null}
                        select
                      >
                      {selectedCategory.subcategories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                      </TextField>
                    : null}
 
              </div>
            

              <div  >
                  {values.subcategory!==""?     
                      <TextField
                      sx={{m: 1, width: '30ch'} }
                      required
                      type="text" 
                      id="subcategory2" 
                      name="subcategory2" 
                      label="Sous-catégorie secondaire"
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
                      {selectedSubategory.subcategories2.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    : null} 
              </div>
             
              <div>
              <TextField
                      sx={{m: 1, width: '30ch'} }
                      required
                      type="number" 
                      id="nbPersonne" 
                      name="nbPersonne" 
                      label="Nombre de personnes"
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
                      sx={{m: 1, width: '30ch'} }
                      required
                      type="number" 
                      id="type" 
                      name="price" 
                      label="Prix"
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
              <Grid container spacing={2}>
              <Grid item  xs={12} >
                 <TextField
                    sx={{m: 1} }
                    fullWidth
                    id="descripton" 
                    name="descripton" 
                    label="Description du plat"
                    multiline
                    rows={5} 
                    variant="outlined"
                    required
                    type="text"
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

              </Grid>
              </Grid>
            
            <input type="submit" className="form-submit" value="Ajouter Plat"/>
            </Form>
           </Box>
           
      ) }
    </Formik>
    </div>
  )
}

export default AddPlat