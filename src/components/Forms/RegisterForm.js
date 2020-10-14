import React, { useEffect, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import classes from './RegisterForm.module.scss';
import { AlertContext } from '../../Context/alert/alertContext';
import { Redirect } from 'react-router-dom';

 
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Заполните поле'),
  
  email: Yup.string()
    .email('Invalid email')
    .required('Заполните поле'),
});
 
const RegisterForm = props => {

  const {show} = useContext(AlertContext);

  const showRegisteredAlert = () => {
    if(props.isRegistered) {
      show({text: "Вы зарегистрированы!", severity: "success"});
    }
  };

  useEffect(() => {
    return showRegisteredAlert();
  });

  if(props.isRegistered === true) return <Redirect to="/loginpage"/>

  return ( <form>
    <div className={classes.main}> 
      <div className="row justify-content-center">
        <h3>Регистрация</h3>
        
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, {resetForm}) => {
            const data = {
                email: values.email,
                password: values.password,
                returnSecureToken: true
            }
            props.setRegisterData(data);
            resetForm({values: ""});
          }}
        >
          {({ errors, touched }) => (
            <div class="container">
              <div class="row justify-content-center">
                <form>
                  <div className="form-row">
                      <Form>
                        <div className={classes.formGroup}>
                          <label htmlFor="inputEmail4">Email</label>
                          <Field name="email" class="form-control" id="inputEmail4"/>
                          {errors.email && touched.email ? (
                            <div className={classes.formRequestError}>{errors.email}</div>
                          ) : null}
                        </div>
                        
                        <div className={classes.formGroup}>
                          <label htmlFor="inputPassword4">Password</label>
                          <Field name="password" type="password" className="form-control" id="inputPassword4"/>
                          {errors.password && touched.password ? <div className={classes.formRequestError}>{errors.password}</div> : null}
                        </div>
                        <div className={classes.buttonGroup}>
                          <Button type="submit" variant="contained" color="primary" >Регистрация</Button>
                          <Button type="reset" variant="contained" color="secondary">Сброс</Button>
                          
                        </div>
                      </Form>
                  </div>
                </form>
              </div>
            </div>
            
          )}
        </Formik>
      </div>
    </div>
  </form> )
};

export default RegisterForm;