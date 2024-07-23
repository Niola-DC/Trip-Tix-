import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { man, woman } from '../../assets/images';
import Star from './Star';
import Notification from './Notification';

export default function Reviews() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // Example data
    const stars = 4.5;
    const reviews = 20;

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
                        <div className="p-4 border-b-[#FBD007] border-b-2">
                            <Link to="/reviews">
                                <div>Reviews</div>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
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
                    <div className="my-4 flex justify-between items-center">
                        <h1 className="font-[590] text-2xl mb-8">Reviews</h1>
                        <Notification/>
                    </div>
                </header>
                <div className='border p-4 border-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
                    <p className='text-2xl font-[590] mb-4'>Reviews</p> <hr />

                    <div className='lg:p-8 pt-8 flex flex-col gap-8'>
                        <div className='flex gap-4'>
                            <div className="max-w-20 max-h-20 rounded-full flex items-center justify-center bg-gray-100">
                                <img src={man} alt="person" className='object-cover h-full w-full rounded-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-[590] text-xl'>John Doe</p>
                                <Star stars={stars} reviews={reviews} />
                                <p className='text-gray-500 font-medium text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid explicabo debitis ratione omnis, sapiente amet. Laboriosam ratione optio exercitationem?</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className="max-w-20 max-h-20 rounded-full flex items-center justify-center bg-gray-100">
                                <img src={woman} alt="person" className='object-cover h-full w-full rounded-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-[590] text-xl'>John Doe</p>
                                <Star stars={stars} reviews={reviews} />
                                <p className='text-gray-500 font-medium text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid explicabo debitis ratione omnis, sapiente amet. Laboriosam ratione optio exercitationem?</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className="max-w-20 max-h-20 rounded-full flex items-center justify-center bg-gray-100">
                                <img src={man} alt="person" className='object-cover h-full w-full rounded-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-[590] text-xl'>John Doe</p>
                                <Star stars={stars} reviews={reviews} />
                                <p className='text-gray-500 font-medium text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid explicabo debitis ratione omnis, sapiente amet. Laboriosam ratione optio exercitationem?</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className="max-w-20 max-h-20 rounded-full flex items-center justify-center bg-gray-100">
                                <img src={woman} alt="person" className='object-cover h-full w-full rounded-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-[590] text-xl'>John Doe</p>
                                <Star stars={stars} reviews={reviews} />
                                <p className='text-gray-500 font-medium text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid explicabo debitis ratione omnis, sapiente amet. Laboriosam ratione optio exercitationem?</p>
                            </div>
                        </div>
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
