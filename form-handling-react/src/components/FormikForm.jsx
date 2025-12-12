import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
});

const FormikForm = () => {
  return (
    <div className="p-4 border rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formik data:", values);
          alert("Registered with Formik!");
        }}
      >
        <Form>
          <Field
            name="username"
            placeholder="Username"
            className="w-full border p-2 mb-2"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500"
          />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-2"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500"
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-2"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded mt-2"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
