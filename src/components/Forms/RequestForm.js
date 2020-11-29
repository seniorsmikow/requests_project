import React, { useEffect, useContext } from 'react';
//import { Redirect } from 'react-router-dom';
import classes from './RequestForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { AlertContext } from '../../Context/alert/alertContext';


const SignupSchema = Yup.object().shape({
    machineId: Yup.number()
        .required('Заполните поле')
        .max(100, 'В цехе 100 станков, проверьте номер станка'),

    userName: Yup.string()
        .required('Заполните поле')
        .min(2, 'Не хватает символов...')
        .max(20, 'Это точно ваша фамилия?'),

    request: Yup.string()
        .required('Заполните поле')
        .max(100, 'Краткость- путь к повышению производетельности!'),
});



const RequestForm = props => {

    const {show} = useContext(AlertContext);

    const showAlert = () => {
        if(props.isRequestsSend) {
            show({text: "Ваш запрос отправлен", severity: "success"});
        } 
    };

    const getRequests = props.getRequestsData;
    const checkReq = props.checkRequestDelete;

    useEffect(() => {
        getRequests();
    }, [getRequests]);

    useEffect(() => {
        return showAlert();
    });

    const userLocalId = props.localId;

    // useEffect(() => {
    //     let answer = checkReq(userLocalId);
    //     console.log(answer);
    // }, [checkReq, userLocalId]);

    const checkReqDel = () => {
        if(userLocalId) {
            // checkReq(userLocalId);
            // console.log(props);

            let a = props.machines.filter(el => el.localId === userLocalId);
            if(!a.length) {
                show({text: "Ваш запрос выполнен", severity: "success"});
            } else {
                show({text: "Ваш запрос не выполнен", severity: "info"});
            }

        }
    };

    
 
    if(userLocalId) {
        return ( 
        
            <div className={classes.mainWrapper__request}>
                <div className={classes.requestTitle}>Ремонт оборудования</div>
                <Formik
                initialValues={{
                    machineId: '',
                    userName: '',
                    date: '',
                    time: '',
                    request: '',
                    localId: `${userLocalId}`
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, {resetForm}) => {
                    props.sendUserRequest(values);
                    resetForm({values: ""});
                }}
                >
                {({ errors, touched }) => (
                        
                    <Form className={classes.mainRequests}>
    
                        <div className={classes.formGroup}>
                            Номер станка
                            <Field name="machineId" type="number" className="form-control"/>
                            {errors.machineId && touched.machineId ? (
                                <div className={classes.formRequestError}>{errors.machineId}</div>
                            ) : null}
                        </div>
    
                        <div className={classes.formGroup}>
                            Имя рабочего
                            <Field name="userName" type="text" className="form-control"/>
                            {errors.userName && touched.userName ? <div className={classes.formRequestError}>{errors.userName}</div> : null}
                        </div>
    
                        <div className={classes.formGroup}>
                            Время
                            <Field name="time" type="time" className="form-control"/>
                            {errors.time && touched.time ? <div className={classes.formRequestError}>{errors.time}</div> : null}
                        </div>
    
                        <div className={classes.formGroup}>
                            Дата 
                            <Field name="date" type="date" className="form-control"/>
                            {errors.date && touched.date ? <div className={classes.formRequestError}>{errors.date}</div> : null}
                        </div>
    
                        <div className={classes.formGroup}>
                            Заявка
                            <Field name="request" type="text" className="form-control"/>
                            {errors.request && touched.request ? <div className={classes.formRequestError}>{errors.request}</div> : null}
                        </div>
                        
                        
                        <div className={classes.buttonGroup}>
                            <div className={classes.request__button}>
                                <Button type="submit" variant="contained" color="primary" disabled={props.isDisabled}>Отправить заявку</Button>
                            </div>
                            <div className={classes.request__button}>
                                <Button type="reset" variant="contained" color="secondary">Сбросить данные</Button>
                            </div>
                        </div>
                        
                    </Form>
                    
                )}
                </Formik>
                <Button onClick={checkReqDel} variant="contained" color="secondary">CHECK</Button>
            </div> ) 
    } return <div>After</div>
};

export default RequestForm;