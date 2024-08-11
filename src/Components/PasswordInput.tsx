import React, { useEffect, useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { RegisterFormData } from '../Utility/interfaces';
import { FaCheck, FaTimes } from "react-icons/fa";
import './PasswordInput.css'


interface PasswordInputProps {
    className?: string,
    register: UseFormRegister<RegisterFormData>;
    errors: FieldErrors<RegisterFormData>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ className, register, errors }) => {
    const [password, setPassword] = useState<string>('');
    const [allRequirementsMet, setAllRequirementsMet] = useState(false);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const requirements = [
        {
            label: 'At least 2 uppercase letters',
            regex: /(?=.*[A-Z].*[A-Z])/,
        },
        {
            label: 'At least 1 special character (!@#$&*)',
            regex: /(?=.*[!@#$&*])/,
        },
        {
            label: 'At least 2 digits',
            regex: /(?=.*[0-9].*[0-9])/,
        },
        {
            label: 'At least 3 lowercase letters',
            regex: /(?=.*[a-z].*[a-z].*[a-z])/,
        },
        {
            label: 'Minimum length of 8 characters',
            regex: /.{8,}/,
        },
    ];

    const checkRequirement = (regex: RegExp): boolean => regex.test(password);

    useEffect(() => {
        const allMet = requirements.every((req) => checkRequirement(req.regex));
        setAllRequirementsMet(allMet);
      }, [password]);

    return (
        <div className={className}>
            <input
                type="password"
                placeholder="Password"
                {...register('password', {
                    required: 'Password is required',
                    pattern: {
                        value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
                        message: 'Password must meet complexity requirements',
                    },
                })}
                value={password}
                onChange={handlePasswordChange}
            />
            {errors.password && <span className="error">{errors.password.message}</span>}
            {!allRequirementsMet ? (
                <ul className="password-requirements">
                    {requirements.map((req, index) => (
                        <li key={index} className={`flex items-center ${checkRequirement(req.regex) ? 'valid' : 'error'}`}>
                            {checkRequirement(req.regex) ? <FaCheck /> : <FaTimes />} {req.label}
                        </li>
                    ))}
                </ul>
            ) : (
                <div className='flex items-center password-requirements'><span className='valid'><FaCheck />&nbsp;Password requirements met!</span></div>
            )}
        </div>
    );
};

export default PasswordInput;