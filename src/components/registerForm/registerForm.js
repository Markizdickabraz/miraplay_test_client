import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorization/operations';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './registerForm.css'; 
import { Link } from 'react-router-dom';
import { ToasterContainer } from '../helpers/toaster';

  const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = { password: '', email: '' };

    const onSubmit = (values) => {
        dispatch(register(values));
  };
        return (
          <div className='form_container'>
          <h2 className='form_title'>Реєстрація</h2>
                <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className="registration-form">
        <div className="form-group">
          <label className='form_label' htmlFor="email">Електронна адреса:</label>
          <Field className="form_input" type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label className='form_label' htmlFor="password">Пароль:</label>
          <Field className="form_input" type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>

        <div className="form-group">
                  <button type="submit" className="submit-button">Зареєструватися</button>
        </div>
          </Form>
            </Formik>
              <p className='login_title'>У мене вже є аккаунт</p>
              <Link to = {'/login'} className="login_btn btn">Вхід</Link>
    <ToasterContainer />

</div>
  );
};

export default RegistrationForm;
