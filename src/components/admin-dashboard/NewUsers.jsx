import React, { useState } from 'react'
import { FiEye, FiEyeOff, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PhoneNumberInput from '../contact/header/PhoneNumberInput';

export default function NewUsers() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [imageFile1, setImageFile1] = useState(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggle = () => {
        setOpen(!open);
    }

    const toggle2 = () => {
        setOpen2(!open2);
    }

    const handleImageUpload1 = (event) => {
        const file = event.target.files[0];
        setImageFile1(file);
    };

    return (
        <div className="flex h-[100vh]">
            <div className={`sidebar bg-[#0E385C] noscroll  overflow-scroll text-white w-[70%] lg:w-[26%] border border-gray-300 h-full fixed md:relative transition-transform transform ${sidebarVisible ? 'translate-x-0  z-50' : '-translate-x-full md:translate-x-0'
                }`}>
                <ul className="px-4 cursor-pointer text-[20px]">
                    <li className='mt-4'>
                        <div className="fontBold">Welcome Admin</div>
                    </li>
                    <li className='mt-4'>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
                            <Link to="/EditHomepage" className="text-white">
                                <div>Dashboard</div>
                            </Link>
                        </div>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
                            <Link to="/users">
                                <div>Users</div>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
                            <Link to="/booking">
                                <div>Bookings</div>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
                            <Link to="/reviews">
                                <div>Reviews</div>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="p-4 border-b-[#FBD007] border-b-2">
                            <Link to="/newUsers">
                                <div>New Users</div>
                            </Link>
                        </div>
                    </li>
                    {/* <li>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
                            <Link to="/Order">
                                <div>Profile</div>
                            </Link>
                        </div>
                    </li> */}
                    <li>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
                            <Link to="/">
                                <div>Logout</div>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex-1 bg-white border h-full text-base overflow-scroll noscroll p-4 ml-0">
                <header>
                    <div className="my-4 items-center">
                        <h1 className="font-[590] text-2xl mb-8">Users</h1>
                    </div>
                </header>

                <div className='border p-4 border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
                    <p className='text-2xl font-[590] mb-4'>Create User</p> <hr />
                    <form className='p-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium text-base'>First Name :</label>
                                <input type="text" className='border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none' placeholder='John' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Email :</label>
                                <input type="email" className='border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none' placeholder='john.doe@example.com' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Password :</label>
                                <div className="flex justify-between border-2 bg-white border-gray-300 rounded-lg">
                                    <input
                                        type={open === false ? "password" : "text"}
                                        placeholder="*****"
                                        className=" w-full p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    />
                                    <div className="flex justify-center text-gray-300 items-center p-3 text-xl">
                                        {open === false ? (
                                            <FiEyeOff onClick={toggle} />
                                        ) : (
                                            <FiEye onClick={toggle} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Last Name :</label>
                                <input type="text" className='border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none' placeholder='Doe' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='font-medium'>Phone # :</label>
                                <PhoneNumberInput />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Confirm Password :</label>
                                <div className="flex justify-between border-2 bg-white border-gray-300 rounded-lg">
                                    <input
                                        type={open2 === false ? "password" : "text"}
                                        placeholder="*****"
                                        className=" w-full p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    />
                                    <div className="flex justify-center text-gray-300 items-center p-3 text-xl">
                                        {open2 === false ? (
                                            <FiEyeOff onClick={toggle2} />
                                        ) : (
                                            <FiEye onClick={toggle2} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-medium text-base'>Your Photo</p>
                            <div className="mt-4">
                                <label htmlFor="imageUpload" className="font-[590] block">
                                    <div className="bg-white border-dotted border-4 h-32 flex justify-center items-center border-gray-300 p-2 mt-2">
                                        {!imageFile1 && (
                                            <span className="text-red-600 font-[590] text-xl">
                                                Click to Upload
                                            </span>
                                        )}

                                        {imageFile1 && (
                                            <img
                                                src={URL.createObjectURL(imageFile1)}
                                                className="w-32"
                                                alt="Uploaded"
                                            />
                                        )}
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageUpload1}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </form>
                    <div className='flex gap-5 justify-center items-center'>
                        <button className=' w-32 text-white py-2 rounded-md font-medium tracking-wide hover:bg-opacity-[0.5] bg-[#0E385C]'>Create User</button>
                        <button className=' w-32 text-white py-2 rounded-md font-medium tracking-wide hover:bg-opacity-[0.5] bg-gray-400'>Cancel</button>
                    </div>
                </div>
            </div>
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button onClick={toggleSidebar} className="flex justify-center cursor-pointer menu p-[10px] rounded-[5px] bg-[#FBD007] text-[#0E385C] items-center">
                    <FiMenu size={"2rem"} />
                </button>
            </div>
        </div>
    )
}
