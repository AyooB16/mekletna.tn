import { useState } from 'react';
import { Grid ,Step, StepLabel, Stepper } from '@mui/material';
import { Select, TextField } from 'formik-mui';
import { Field } from 'formik';
import * as Yup from 'yup';
import MenuItem from '@mui/material/MenuItem';

import { Box, Button, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Ce champ est obligatoire').max(30, 'Trop long'),
  lastName: Yup.string().required('Ce champ est obligatoire').max(30, 'Trop long'),
  addressLine1: Yup.string().required('Ce champ est obligatoire').max(200, 'Trop long'),
  addressLine2: Yup.string().notRequired(),
  city: Yup.string().required('Ce champ est obligatoire').max(30, 'Trop long'),
  provinceState: Yup.string().required('Ce champ est obligatoire').max(30, 'Trop long'),
  zipPostalCode: Yup.string()
    .required('Ce champ est obligatoire')
    .min(4, 'Trop court')
    .max(7, 'Trop long'),
  phone: Yup.string()
    .phone("TN","","Numéro de téléphone est invalide")
    .required("Ce champ est obligatoire"),
});
const initialValues = 
  {
    firstName:'',
    lastName:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    provinceState:'',
    zipPostalCode:'',
    phone:'+216 ',
  };
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
  <div className='container mt-5 p-5'> 
    <Stepper alternativeLabel activeStep={activeStep} className="m-4">
      <Step key={"Détails de livraison et paiement"}>
        <StepLabel>Détails de livraison et paiement</StepLabel>
      </Step>
      <Step key={"Confirmation"}>
        <StepLabel>Confirmation</StepLabel>
      </Step>
    </Stepper>
  <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={(value) => console.log(value)}
  >
      { ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur
      }) => (
    <Form >
    <Typography variant="h5" gutterBottom>
    Adresse et détails de livraison
    </Typography>
    <Grid container spacing={2} className="mt-2">
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Nom"
          name="lastName"
          variant="outlined"
          error={touched?.lastName && !!errors?.lastName}
          helperText={touched?.lastName && errors?.lastName}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Prénom"
          name="firstName"
          variant="outlined"
          error={touched?.firstName && !!errors?.firstName}
          helperText={touched?.firstName && errors?.firstName}
          fullWidth
        />
      </Grid>
      
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Adresse 1"
          name="addressLine1"
          variant="outlined"
          error={touched?.addressLine1 && !!errors?.addressLine1}
          helperText={touched?.addressLine1 && errors?.addressLine1}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Adresse 2"
          name="addressLine2"
          variant="outlined"
          error={touched?.addressLine2 && !!errors?.addressLine2}
          helperText={touched?.addressLine2 && errors?.addressLine2}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Ville"
          name="city"
          variant="outlined"
          error={touched?.city && !!errors?.city}
          helperText={touched?.city && errors?.city}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          select
          label="Province/État"
          name="provinceState"
          variant="outlined"
          error={touched?.provinceState && !!errors?.provinceState}
          helperText={touched?.provinceState && errors?.provinceState}
          fullWidth
        >
          <MenuItem value="Tunis">Tunis</MenuItem>
          <MenuItem value="Ariana">Ariana</MenuItem>
          <MenuItem value="Ben Arous">Ben Arous</MenuItem>
          <MenuItem value="Manouba">Manouba</MenuItem>
        </Field>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Zip/Postal Code"
          name="zipPostalCode"
          variant="outlined"
          error={touched?.zipPostalCode && !!errors?.zipPostalCode}
          helperText={touched?.zipPostalCode && errors?.zipPostalCode}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Numéro de téléphone "
          name="phone"
          variant="outlined"
          error={touched?.phone && !!errors?.phone}
          helperText={touched?.phone && errors?.phone}
          fullWidth
        />
      </Grid>
    </Grid>
    <Typography variant="h5" gutterBottom className="mt-2">
    Mode de paiement
    </Typography>
    <Box textAlign="right" mt={2}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        Continue
      </Button>
    </Box>
  </Form>
  ) }
</Formik>
</div>
  )
}

export default Checkout
