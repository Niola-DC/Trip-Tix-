import React, { useState, useEffect } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import axiosClient from '../../../../axiosClient';
import { useStateContext } from '../../../context/ContextProvider';

const ContactContent = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const [user, setUser] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const {token} = useStateContext();

    useEffect(() => {
        // Fetch user data if logged in
        const fetchUser = async () => {
            try {
                const response = await axiosClient.get('/api/user'); // Adjust the endpoint if necessary
                setUser(response.data);
                setFormData(prevData => ({
                    ...prevData,
                    fullName: response.data.fullName,
                    email: response.data.email,
                }));
            } catch (err) {
                console.error('Error fetching user data:', err);
                // Handle error fetching user data if necessary
            }
        };
        if (token) {
            fetchUser();
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(null);

        try {
            await axiosClient.post('/api/submit/contactus', formData);
            setSuccess('Your message has been sent successfully!');
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: '',
            });
        } catch (err) {
            setError('Failed to send your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='h-auto'>
            <div className='flex flex-col mb-[50px] gap-4 justify-center p text-white items-center'>
                <p className='sm:text-6xl text-4xl font-[900]'>CONTACT US</p>
                <p className='text-base font-medium'>We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            </div>
            <div className='bg-white px-[20px] sm:px-[30px] py-[30px] flex flex-col rounded-xl h-auto drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Name <span className='text-red-600'>*</span></p>
                            <input 
                                type='text' 
                                name='fullName' 
                                value={formData.fullName} 
                                onChange={handleChange}
                                placeholder='Your full name' 
                                className='bg-[#E1EBFF] p-3 rounded-lg focus:outline-none text-black focus:shadow-outline' 
                                readOnly={user && !!user.fullName} // Make readonly if user data is available
                            />
                        </div>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Email <span className='text-red-600'>*</span></p>
                            <input 
                                type='email' 
                                name='email' 
                                value={formData.email} 
                                onChange={handleChange}
                                placeholder='Your email' 
                                className='bg-[#E1EBFF] p-3 rounded-lg focus:outline-none text-black focus:shadow-outline' 
                                readOnly={user && !!user.email} // Make readonly if user data is available
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Phone <span className='text-red-600'>*</span></p>
                            <PhoneNumberInput 
                                name='phoneNumber' 
                                value={formData.phoneNumber} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Subject <span className='text-red-600'>*</span></p>
                            <input 
                                type='text' 
                                name='subject' 
                                value={formData.subject} 
                                onChange={handleChange}
                                placeholder='Subject' 
                                className='bg-[#E1EBFF] p-3 rounded-lg focus:outline-none text-black focus:shadow-outline' 
                            />
                        </div>
                    </div>
                    <div className='w-full mt-3 flex flex-col gap-2'>
                        <p className='font-medium'>Message <span className='text-red-600'>*</span></p>
                        <textarea 
                            name='message' 
                            value={formData.message} 
                            onChange={handleChange}
                            className='bg-[#E1EBFF] w-full p-3 h-30 rounded-lg focus:outline-none text-black focus:shadow-outline' 
                            placeholder='Write your message'
                        ></textarea>
                    </div>
                    <button 
                        type='submit' 
                        className='bg-blue-600 font-medium text-white w-full mt-9 py-3 rounded-lg drop-shadow-xl shadow-[0px_4px_10px_#00000026] px-4'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                    {error && <p className='text-red-600 mt-2'>{error}</p>}
                    {success && <p className='text-green-600 mt-2'>{success}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactContent;
