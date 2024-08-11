import React, { useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { RegisterFormData } from '../Utility/interfaces';
import { FaCircleExclamation } from 'react-icons/fa6';
import './PhoneInput.css'

interface PhoneInputProps {
    className?: string;
    register: UseFormRegister<RegisterFormData>;
    errors: FieldErrors<RegisterFormData>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ className, register, errors }) => {
    const [phone, setPhone] = useState<string>('');

    const maxPhoneLength = 14;

    const formatPhoneNumber = (value: string): string => {
        // Remove all non-digit characters
        const phoneNumber = value.replace(/\D/g, '');

        // Format phone number to (###) ###-####
        if (phoneNumber.length <= 3) {
            return phoneNumber;
        } else if (phoneNumber.length <= 6) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        } else {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= maxPhoneLength) {
            setPhone(formatPhoneNumber(e.target.value));
        }
    }

    return (
        <div className={className}>
            <input
                type='text'
                placeholder='Phone'
                value={phone}
                maxLength={maxPhoneLength}
                {...register('phone', {
                    required: 'Required',
                    pattern: {
                        value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                        message: 'Invalid phone number'
                    },
                    onChange: handlePhoneChange
                })}
            >
            </input>
            {errors.phone ? (
                <span className='error'><FaCircleExclamation />&nbsp;{errors.phone.message}</span>
            ) : (
                <span className='valid'>&nbsp;</span>
            )}
        </div>
    )
}

export default PhoneInput;
