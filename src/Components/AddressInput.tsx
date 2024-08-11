import React, { useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { RegisterFormData } from '../Utility/interfaces';
import { FaCircleExclamation } from 'react-icons/fa6';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './AddressInput.css';

interface AddressInputProps {
    className?: string;
    register: UseFormRegister<RegisterFormData>;
    errors: FieldErrors<RegisterFormData>;
}

const AddressInput: React.FC<AddressInputProps> = ({className, register, errors }) => {
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState<{ lat: number | null; lng: number | null }>({
        lat: null,
        lng: null,
    });

    const handleSelect = async (value: string) => {
        const results = await geocodeByAddress(value);
        const latLng = getLatLng(results[0]);
        setAddress(value);
        setCoordinates(await latLng);
    };

    return (
        <div className={className}>
            <PlacesAutoComplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({placeholder: "Address"})}/>
                        <div className='address-suggestions text-raisin-black'>
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion) => {
                                const style = {
                                    backgroundColor: suggestion.active ? '#1893F8' : '#aed9fd'
                                }

                                const { key, ...restProps } = getSuggestionItemProps(suggestion, { style });
                                const { placeId } = suggestion;

                                return (
                                    <div key={placeId} {...restProps}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    )}
            </PlacesAutoComplete>
        </div>
    )
}

export default AddressInput;