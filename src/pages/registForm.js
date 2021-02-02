// import React from "react";
// import { useFormik, withFormik } from "formik";
// import Yup from "yup";
import Button from '@material-ui/core/Button';
// import {
//   Paper,
//   // CardContent,
//   Typography,
//   TextField,
//   FormHelperText,
//   // CardActions,
//   Button,
//   FormControlLabel,
//   Checkbox,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   InputAdornment,
//   IconButton,
// } from "@material-ui/core";
// import PersonIcon from "@material-ui/icons/Person";
// import LockIcon from "@material-ui/icons/Lock";
// import EmailIcon from "@material-ui/icons/Email";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import MenuItem from '@material-ui/core/MenuItem';
// import WcIcon from '@material-ui/icons/Wc';
// import PhoneIcon from '@material-ui/icons/Phone';

// let currencies = [
//    {
//      value: 'male',
//      label: 'Male',
//    },
//    {
//      value: 'female',
//      label: 'Female',
//    },
//  ];

//  const formik = withFormik({
//      mapPropsToValues({ email}) {
//          return {

//          }
//      }
//  })

// class Regist extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       errorUsername: false,
//       errorEmail: false,
//       errorPass: false,
//       errorConfPass: false,
//       errorTextUname:
//         "Username must be at least 3 characters combination of letters and numbers.",
//       errorTextEmail: "Example: yourmail@domain.com.",
//       errorTextPass:
//         "Password must be at least 6 characters combination of letters, numbers, and symbol.",
//       errorTextConfPass: "Confirm password must be matched with password.",
//     };
//   }

//   render() {
//     const { showPassword, redirect, checked, checkedText, errorTextUname, errorUsername, errorTextEmail, errorEmail, errorPass, errorTextPass, errorConfPass, errorTextConfPass } = this.state;
//     return (
//       <div style={styles.root}>
//         <Paper style={styles.paper} elevation={3}>
//           <h3>Register Form</h3>
//           <div style={{ margin: "5px" }}>
//             {/* <Typography>Username</Typography> */}
//             <TextField
//               required
//               id="outlined-multiline-flexible"
//               label="Username"
//               multiline
//               rowsMax={4}
//               placeholder="Your username..."
//               variant="outlined"
//               error={errorUsername}
//               inputRef={(username) => (this.username = username)} //buat ngambil value username
//             //   onChange={(e) => this.handleUsername(e)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               aria-describedby="outlined-weight-helper-text"
//               // helperText="Incorrect entry."
//               // error={!this.state.unamelength}
//             //   value={value}
//             />
//             {/* {this.helperTextUname()} */}
//             <FormHelperText
//               id="outlined-weight-helper-text"
//               style={errorUsername ? styles.error : styles.default}
//             >
//               {errorTextUname}
//             </FormHelperText>
//           </div>
//           <div style={{ margin: "5px" }}>
//             {/* <Typography>Email</Typography> */}
//             <TextField
//               required
//               id="outlined-multiline-flexible"
//               label="Email"
//               multiline
//               rowsMax={4}
//               placeholder="Your email..."
//               inputRef={(email) => (this.email = email)} //buat ngambil value email
//             //   onChange={(e) => this.handleEmail(e)}
//               error={errorEmail}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <EmailIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               // aria-describedby="outlined-weight-helper-text"
//               // value={value}

//               variant="outlined"
//             />
//             <FormHelperText
//               id="outlined-weight-helper-text"
//               style={errorEmail ? styles.error : styles.default}
//             >
//               {errorTextEmail}
//             </FormHelperText>
//           </div>
//           <TextField
//           id="outlined-select-currency"
//           select
//           label="Gender"
//         //   value={currency}
//         //   onChange={handleChange}
//           helperText="Please select your gender"
//           variant="outlined"
//           InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <WcIcon />
//                   </InputAdornment>
//                 ),
//               }}
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <div style={{ margin: "5px" }}>
//             {/* <Typography>Phone Number</Typography> */}
//             <TextField
//               required
//               id="outlined-multiline-flexible"
//               label="Phone Number"
//               multiline
//               rowsMax={4}
//               placeholder="Your phone number..."
//             //   inputRef={(email) => (this.email = email)} //buat ngambil value email
//             //   onChange={(e) => this.handleEmail(e)}
//             //   error={errorEmail}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               // aria-describedby="outlined-weight-helper-text"
//               // value={value}

//               variant="outlined"
//             />
//           </div>
//           <Button variant="outlined" color="primary">
//             SUBMIT
//           </Button>
//         </Paper>
//       </div>
//     );
//   }
// }

// const styles = {
//   root: {
//     height: "calc(100vh - 70px)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     // paddingTop: 88,
//     backgroundImage: "url('../assets/forloginform.jpg')",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     //   background: "linear-gradient(90deg, rgba(19,15,64,1) 15%, rgba(77,75,111,1) 66%, rgba(148,148,169,1) 85%, rgba(248,250,249,1) 100%)"
//   },

//   paper: {
//     height: "75vh",
//     width: "50vw",
//     // opacity : "0.7",
//     backgroundColor: "rgba(30, 39, 46, 0.3)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "1%" /*mendorong ke dalam*/,
//   },
// };

// export default Regist;

import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from 'yup';

const isRequired = (message) => (value) => (!!value ? undefined : message);

class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Register Form with Formik</h1>
        <Formik
          initialValues={{
            Username: "",
            Email: "",
            Gender: "",
            Phonenumber: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 4));
          }}
        >
          <Form>
            {/* <label htmlFor="username">Username</label> */}
            <div>
              <Field
                name="Username"
                validate={isRequired("This field is required")}
                type="text"
                placeholder="Your username"
              />
              <ErrorMessage name="Username" />
            </div>
            <br />
            <div>
              <Field
                name="Email"
                validate={isRequired("This field is required")}
                type="text"
                placeholder="Email"
              />
              <ErrorMessage name="Email" />
            </div>
            <br />
            <div>
              <Field
                name="Gender"
                validate={isRequired("This field is required")}
                type="text"
                placeholder="Gender"
              />
              <ErrorMessage name="Gender" />
            </div>
            <br />
            <div>
              <Field
                name="Phonenumber"
                validate={isRequired("This field is required")}
                type="text"
                placeholder="Your phone number"
              />
              <ErrorMessage name="Phonenumber" />
            </div>
            <br />
            <button type="submit">Submit</button>
            
            <hr />
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Regist;
