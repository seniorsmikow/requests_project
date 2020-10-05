import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './LoginForm.module.scss';
import Button from '@material-ui/core/Button';

 
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Заполните поле'),
  
  email: Yup.string()
    .email('Invalid email')
    .required('Заполните поле'),
});
 
const LoginForm = props => {

  const resetIsLogin = () => {
    props.resetIsLogin();
  };


  useEffect(() => {
    if(props.isLogin) {
      alert("Enter!");
    }
    return resetIsLogin();
  }, [props.isLogin]);


  return ( <form>
    <div className={classes.main}> 
      <div>
        <h2>Login</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            props.setLoginData(values);
          }}
        >
          {({ errors, touched }) => (
            
            <form>
              <div>
                  <Form>
                    <div className={classes.formGroup}>
                      <label htmlFor="inputEmail4">Email</label>
                      <Field name="email" type="email" className="form-control" id="inputEmail4"  autoComplete="on"/>
                      {errors.email && touched.email ? (
                        <div className={classes.formRequestError}>{errors.email}</div>
                      ) : null}
                    </div>
                    
                    <div className={classes.formGroup}>
                      <label htmlFor="inputPassword4">Password</label>
                      <Field name="password" type="password" className="form-control" id="inputPassword4" autoComplete="on"/>
                      {errors.password && touched.password ? <div className={classes.formRequestError}>{errors.password}</div> : null}
                    </div>
                    <div className={classes.buttonGroup}>
                      <Button type="submit" variant="contained" color="primary">Вход</Button>
                      <Button type="reset" variant="contained" color="secondary">Сброс</Button>
                      
                    </div>
                    <div className={classes.registerTip}>
                        отсутствует аккаунт?
                        <NavLink style={{color: '#a5e22f', textDecoration: 'none'}} to="/registerpage">регистрация</NavLink>
                    </div>
                  </Form>
              </div>
            </form>
          
            
          )}
        </Formik>
      </div>
    </div>
  </form> )
}

export default LoginForm;