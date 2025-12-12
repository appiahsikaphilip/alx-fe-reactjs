import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
});

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log('Formik form submitted:', values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
                    </div>

                    <div>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
                    </div>

                    <div>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
                    </div>

                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;