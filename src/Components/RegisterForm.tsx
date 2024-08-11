import React from 'react'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import './RegisterForm.css'
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCheck } from 'react-icons/fa'
import  PasswordInput from './PasswordInput'
import { RegisterFormData } from '../Utility/interfaces';

const RegisterForm: React.FC = () => {

    const requiredMsg = 'Required';
    const lengthMsg = 'Max length exceeded'

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
        console.log('Form submited:', data);
    }

    const password = watch('password', '');

    return (
        <div className='wrapper'>
            <h1 className="register-header">Register</h1>
            <hr />
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='input-box flex items-center'>
                    <input
                        type='text'
                        placeholder='First Name'
                        {...register('firstName', {
                            required: true,
                            maxLength: 64
                        })}
                    />
                    {errors.firstName ? (
                        errors.firstName.type === 'required' ? (
                            <span className='error'><FaCircleExclamation />&nbsp;{requiredMsg}</span>
                        ) : (
                            <span className='error'><FaCircleExclamation />&nbsp;{lengthMsg}</span>
                        )
                    ) : (
                        <span className="valid">&nbsp;</span>
                    )}
                </div>

                <div className='input-box flex items-center'>
                    <input
                        type='text'
                        placeholder='Last Name'
                        {...register('lastName', {
                            required: true,
                            maxLength: 64
                        })}
                    />
                    {errors.lastName ? (
                        errors.lastName.type === 'required' ? (
                            <span className='error'><FaCircleExclamation />&nbsp;{requiredMsg}</span>
                        ) : (
                            <span className='error'><FaCircleExclamation />&nbsp;{lengthMsg}</span>
                        )
                    ) : (
                        <span className="valid">&nbsp;</span>
                    )}
                </div>

                <div className='input-box'>
                    <input
                        type='text'
                        placeholder='Email'
                        {...register('email', {
                            required: requiredMsg,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email ? (
                        <span className='error'><FaCircleExclamation />&nbsp;{errors.email.message}</span>
                    ) : (
                        <span className="valid">&nbsp;</span>
                    )}
                </div>

                <div className='input-box'>
                    <input
                        type='text'
                        placeholder='Phone'
                        {...register('phone', {
                            required: requiredMsg,
                            pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                                message: 'Invalid phone number'
                            }
                        })}
                    />
                    {errors.phone ? (
                        <span className='error'><FaCircleExclamation />&nbsp;{errors.phone.message}</span>
                    ) : (
                        <span className="valid">&nbsp;</span>
                    )}
                </div>

                <div className='input-box'>
                    <input
                        type='text'
                        placeholder='Address'
                        {...register('address', {
                            required: requiredMsg
                        })}
                    />
                    {errors.address ? (
                        <span className='error'><FaCircleExclamation />&nbsp;{errors.address.message}</span>
                    ) : (
                        <span className="valid">&nbsp;</span>
                    )}
                </div>

                <PasswordInput className='input-box password-input' register={register} errors={errors}/>

                <div className="input-box">
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        {...register('confirmPassword', {
                            required: requiredMsg,
                            validate: value => value === password || 'Passwords do not match'
                        })}
                    />
                    {errors.confirmPassword ? (
                        <span className='error'><FaCircleExclamation />&nbsp;{errors.confirmPassword.message}</span>
                    ): (
                        <span className='valid'><FaCheck />&nbsp; Passwords match!</span>
                    )}
                </div>

                <div className="register-btn">
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
};

export default RegisterForm;