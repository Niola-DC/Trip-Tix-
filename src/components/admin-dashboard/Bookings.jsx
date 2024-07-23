import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { man, woman } from "../../assets/images";
import { FiMenu } from "react-icons/fi";
import Notification from "./Notification";

export default function Bookings() {
  const [selectAll, setSelectAll] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);

    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
    });
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
            <div className="p-4 border-b-[#FBD007] border-b-2">
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
        <div className="p-4">
          <header>
            <div className=" my-4 flex justify-between items-center">
              <h1 className="font-[590] text-2xl block">Bookings</h1>
              <Notification/>
            </div>
          </header>
          <form>
            <div className="lg:flex justify-between mb-4 items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026] bg-slate-200 rounded-lg p-4 my-6">
              <div className="flex items-center">
                <p className="font-medium">Show</p>
                <div className="m-4">
                  <select className="px-2 py-1 border border-gray-300 rounded">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
                <p className="font-medium">entries</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>Search:</p>
                <input type="text" className="border-black border-2 p-1  rounded-lg " />
              </div>
            </div>
          </form>
          <table className="w-full border overflow-x-auto mr-12 drop-shadow-xl shadow-[0px_4px_10px_#00000026] border-gray-300 bg-slate-200 rounded-lg p-1">
            <thead>
              <tr>
                <th className="fontBold bg-slate-500  text-white p-4">Image</th>
                <th className="fontBold bg-slate-500  text-white p-4">Name</th>
                <th className="fontBold bg-slate-500  text-white p-4">Mobile</th>
                <th className="fontBold bg-slate-500  text-white p-4">Email</th>
                <th className="fontBold bg-slate-500  text-white p-4">Arrive</th>
                <th className="fontBold bg-slate-500  text-white p-4">Depart</th>
                <th className="fontBold bg-slate-500  text-white p-4">Status</th>
                <th className="fontBold bg-slate-500  text-white p-4">Action</th>
              </tr>
            </thead>
            <tbody className="p-5 ">
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <img src={man} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-green-400 p-2 text-white rounded-md">pending</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <img src={woman} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-yellow-400 p-2 text-white rounded-md">pending</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <img src={man} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-red-600 p-2 text-white rounded-md">Cancelled</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <img src={woman} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-red-600 p-2 text-white rounded-md">Cancelled</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <img src={man} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-green-400 p-2 text-white rounded-md">Approved</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <img src={woman} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-green-400 p-2 text-white rounded-md">Approved</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>

              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <img src={man} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center p-4 bg-white">
                  John Doe
                </td>
                <td className="text-center p-4 bg-white">923312440</td>
                <td className="text-center p-4 bg-white">Doe22145@yahoo.com</td>
                <td className="text-center p-4 bg-white">11/06/2019</td>
                <td className="text-center p-4 bg-white">15/06/2019</td>
                <td className="text-center p-4 "><span className="bg-yellow-400 p-2 text-white rounded-md">pending</span></td>
                <td className="text-center p-4 bg-white"><div className="hover:visible">
                  <Link to="/" className="text-red-500 hover:underline">
                    Delete
                  </Link>
                  <Link to="/" className=" hover:underline ml-4">
                    View
                  </Link>
                </div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-14">
          <Pagination />
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

