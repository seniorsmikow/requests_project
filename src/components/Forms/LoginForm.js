import React, { useEffect, useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classes from './LoginForm.module.scss';
import Button from '@material-ui/core/Button';
import { AlertContext } from '../../Context/alert/alertContext';

 
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Заполните поле'),

  
  email: Yup.string()
    .email('Неверный почтовый адрес')
    .required('Заполните поле'),
});

 
const LoginForm = props => {

  const {show} = useContext(AlertContext);

  const showAlert = () => {
    if(props.isAdmin) {
      show({text: "Вы зашли в режиме администратора", severity: "info"});
    } else if(props.isUser) {
      show({text: "Вы зашли в режиме пользователя", severity: "info"});
    } else if(props.showErrorAlert) {
      show({text: "Неверные данные. Попробуйте снова или используйте тестовые параметры, описанные на главной странице", severity: "error"});
    }
}; 

  useEffect(() => {
    return showAlert();
  });


  if (props.isAdmin === true)  return <Redirect to="/request"/>

  if (props.isUser === true)  return <Redirect to="/sendrequestpage"/>


    return ( 
            <form>
              <div className={classes.main}> 
                <div>
                  <h2>Login</h2>
                  <Formik
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, {resetForm}) => {
                      props.setLoginData(values);
                      resetForm({values: ""});
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