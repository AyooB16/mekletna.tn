import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Field} from 'formik';

const Checkout = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Field
        component={TextField}
        label="First Name"
        name="firstName"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        component={TextField}
        label="Last Name"
        name="lastName"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        component={TextField}
        label="Address line 1"
        name="addressLine1"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <Field
        component={TextField}
        label="Address line 2"
        name="addressLine2"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        component={TextField}
        label="City"
        name="city"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        component={TextField}
        label="Province/State"
        name="provinceState"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        component={TextField}
        label="Country"
        name="country"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Field
        component={TextField}
        label="Zip/Postal Code"
        name="zipPostalCode"
        variant="outlined"
        fullWidth
      />
    </Grid>
  </Grid>
  )
}

export default Checkout
