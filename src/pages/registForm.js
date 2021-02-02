import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as yup from "yup";

// const isRequired = (message) => (value) => (!!value ? undefined : message);

const validationSchem = yup.object ({
Username: yup.string().required('This field is required'),
Email: yup.string().email('Invalid email address').required('This field is required'),
Gender: yup.string().required('This field is required'),
Phonenumber: yup.string().required('This field is required')
})

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
          validationSchema={validationSchem}
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
                validate={validationSchem}
                type="text"
                placeholder="Your username"
              />
              <ErrorMessage name="Username" />
            </div>
            <br />
            <div>
              <Field
                name="Email"
                validate={validationSchem}
                type="text"
                placeholder="Email"
              />
              <ErrorMessage name="Email" />
            </div>
            <br />
            <div>
              <Field
                name="Gender"
                validate={validationSchem}
                type="text"
                placeholder="Gender"
              />
              <ErrorMessage name="Gender" />
            </div>
            <br />
            <div>
              <Field
                name="Phonenumber"
                validate={validationSchem}
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
