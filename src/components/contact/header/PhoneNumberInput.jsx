import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = () => {
    const [phone, setPhone] = useState('');

    return (
        <div>
            <PhoneInput
                country={'ng'} // Set default country to Nigeria
                value={phone}
                onChange={phone => setPhone(phone)}
                enableSearch={true}
                countryCodeEditable={false}
                inputStyle={{
                    width: '100%',
                    height: '35px',
                    borderRadius: '10px', // Border radius for the input field
                    border: 'none',
                    padding: '22px',
                    paddingLeft: '80px',
                    cursor: 'text', // Ensure the cursor is visible in the input field
                    color: 'black', // Set the text color to black
                    caretColor: 'black', // Set the caret (cursor) color to black
                    backgroundColor: '#E1EBFF' // Set the background color to white
                }}
                buttonStyle={{
                    borderRadius: '10px 0 0 10px', // Border radius for the dropdown button
                    border: 'none',
                    cursor: 'pointer', // Ensure the cursor is a pointer over the button
                    backgroundColor: '#E1EBFF', // Set the background color to white
                    padding: '20px',
                }}
            />
        </div>
    );
};

export default PhoneNumberInput;
