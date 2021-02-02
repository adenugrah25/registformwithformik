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
