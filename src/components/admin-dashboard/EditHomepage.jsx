import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import SmallCards from './SmallCards';
import DashboardCharts from './DashboardCharts';

const EditHomepage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex h-[100vh]">
      <div className={`sidebar bg-[#0E385C] noscroll  overflow-scroll text-white w-[70%] lg:w-[26%] border border-gray-300 h-full fixed md:relative transition-transform transform ${
        sidebarVisible ? 'translate-x-0  z-50' : '-translate-x-full md:translate-x-0'
        }`}>
        <ul className="px-4 cursor-pointer text-[20px]">
          <li className='mt-4'>
            <div className="fontBold">Welcome Admin</div>
          </li>
          <li className='mt-4'>
            <div className="p-4 border-b-[#FBD007] border-b-2">
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
          <div className="flex my-4 items-center">
            <h1 className="text-2xl font-[590]">Dashboard</h1>
          </div>
          <p className="text-md text-slate-400">
            You've reached the editing dashboard homepage, where you can modify and personalize your dashboard experience.
          </p> 
        </header>
        <div>
          <SmallCards/>
          <DashboardCharts/>
        </div>
      </div>
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button onClick={toggleSidebar} className="flex justify-center cursor-pointer menu p-[10px] rounded-[5px] bg-[#FBD007] text-[#0E385C] items-center">
          <FiMenu size={"2rem"} />
        </button>
      </div>
    </div>
  );
}

export default EditHomepage;
