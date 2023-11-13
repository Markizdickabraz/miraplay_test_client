import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/authorization/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {ToasterContainer} from '../helpers/toaster';
import { useNavigate } from 'react-router-dom';
import { tokenUser } from '../../redux/authorization/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { password: '', email: '' };
  const token = useSelector(tokenUser);
  const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
      dispatch(logIn(values)); 
      setSubmitting(false);
      console.log(token);
    if (token !== null) {
      return navigate('/home');
    }
  };
         return (
          <div className='form_container'> 
          <h2 className='form_title'>Вхід</h2>
             <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
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
                     <button type="submit" className="submit-button">Вхід</button>
                   </div>
                 </Form>
             </Formik>
<ToasterContainer />
</div>
  );
};