import React, { useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';;

interface FormData {
    password: string;
}

interface PasswordValidationProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

const PasswordValidation: React.FC<PasswordValidationProps> = ({ register, errors }) => {
    const [password, setPassword] = useState<string>('');

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

    return (
        <div>
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
            <ul className="password-requirements">
                {requirements.map((req, index) => (
                    <li key={index} className={checkRequirement(req.regex) ? 'valid' : 'invalid'}>
                        {checkRequirement(req.regex) ? '✔️' : '❌'} {req.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordValidation;