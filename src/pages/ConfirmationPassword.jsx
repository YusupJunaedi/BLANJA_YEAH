import React, { useState } from 'react'
import '../component/auth/login/login.css'
import { Formik } from 'formik';
import * as yup from 'yup';

import logoBlanja from '../assets/image/logo-blanja.png'

const ConfirmationPassword = ({ changeToRegister, changeToReset }) => {

    const reviewSchema = yup.object({
        password: yup
            .string().matches(
                /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                'password must be include lowerCase, upperCase, numbers and minimum 8 characters',
            )
            .required(),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'passwords must be the same').matches(
            /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
            'password must be include lowerCase, upperCase, numbers and minimum 8 characters',
        ).required()
    });


    return (
        <div className="d-flex justify-content-center align-items-center container-auth">
            <form>
                <div className="row content">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <img src={logoBlanja} alt="logo" width="120" height="50" />
                    </div>
                    <div className="col-md-12 text-center mt-3">
                        <p className="font-weight-bold">Please login with your account</p>
                    </div>
                    <div className="col-md-12 text-center mt-2">
                        <p className="text-title-reset">We have sent an email containing a password reset instruction to your email.</p>
                    </div>
                    <div className="col-md-12 text-center">
                        <p className="text-title-reset">please check your email.</p>
                    </div>

                    <Formik
                        initialValues={{ password: '', passwordConfirm: '' }}
                        validationSchema={reviewSchema}
                        onSubmit={(values, { resetForm }) => {
                            const data = {
                                ...values,
                            }
                            console.log(data)
                            resetForm({ values: '' })
                        }}>
                        {(props) => (
                            <>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                    <input type="password" className="input-text" placeholder="Password" name="password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password} /> <br />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <p className="text-red">{props.touched.password && props.errors.password}</p>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                    <input type="password" className="input-text" placeholder="Password" name="passwordConfirm" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.passwordConfirm} /> <br />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <p className="text-red">{props.touched.passwordConfirm && props.errors.passwordConfirm}</p>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                                    <button type="button" className="btn-submit" onClick={props.handleSubmit}>Submit</button>
                                </div>
                            </>
                        )}
                    </Formik>


                </div>
            </form>
        </div >
    )
}

export default ConfirmationPassword
