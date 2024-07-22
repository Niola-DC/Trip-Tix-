import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { FiMenu } from "react-icons/fi";

export default function Users() {
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
    // <div className="grid grid-cols-12 gap-4">
    //   <div className="col-span-3 bg-gray-200 h-[100vh]">
    //   <ul className="px-4">
    //       <li>
    //         <div className="fontBold">Welcome Admin</div>
    //       </li>
    //       <li>
    //         <div className="p-4 hover:bg-slate-300 border-b">
    //           <Link to="/EditHomepage" className="text-black  ">
    //             <div>EditHomepage</div>
    //           </Link>
    //         </div>
    //         <div className="p-4 hover:bg-slate-300 border-b  ">
    //           <Link to="/Reports" className="text-black  ">
    //             <div>Analysis</div>
    //           </Link>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="p-4  hover:bg-slate-300 border-b">
    //           <Link to="/EditOrder" className="text-black active">
    //             <div>Edit Order</div>
    //           </Link>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="p-4 hover:bg-slate-300 border-b">
    //           <Link to="/Products" className="text-black ">
    //             <div>Products</div>
    //           </Link>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="p-4  hover:bg-slate-300 border-b">
    //           <Link to="/NewProducts" className="text-black ">
    //             <div>New Products</div>
    //           </Link>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="p-4  bg-slate-400 border-b">
    //           <Link to="/Order" className="text-black ">
    //             <div>Order</div>
    //           </Link>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="p-4  hover:bg-slate-300 border-b">
    //           <Link to="/" className="text-black ">
    //             <div>Logout</div>
    //           </Link>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
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
            <div className="p-4 border-b-[#FBD007] border-b-2">
              <Link to="/users">
                <div>Users</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
              <Link to="/EditOrder">
                <div>Bookings</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
              <Link to="/Products">
                <div>Reviews</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
              <Link to="/NewProducts">
                <div>New Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
              <Link to="/Order">
                <div>Profile</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4 hover:border-b-2 hover:border-b-[#FBD007]">
              <Link to="/">
                <div>Logout</div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-span-9 flex-1 bg-white border h-full text-base overflow-scroll noscroll p-4 ml-0">
        <div className="p-4">
          <header>
            <div className=" my-4 items-center">
              <h1 className="font-[590] text-2xl mb-4">Users</h1>
              <button className="bg-[#0E385C] tracking-wide w-28 hover:bg-opacity-[0.5] py-2 rounded-md text-white">Add new +</button>
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
                <input type="text" className="border-black border-2 p-1  rounded-lg "/>
              </div>
            </div>
          </form>
          <table className="w-full border border-gray-300 bg-slate-200 rounded-lg shadow-lg p-4">
            <thead>
              <tr>
                <th className="font-bold bg-slate-500 p-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="fontBold bg-slate-500  text-white p-4">#</th>
                <th className="fontBold bg-slate-500  text-white p-4">First Name</th>


                <th className="fontBold bg-slate-500  text-white p-4">Last Name</th>
                <th className="fontBold bg-slate-500  text-white p-4">Email</th>
                <th className="fontBold bg-slate-500  text-white p-4">Phone #</th>
                <th className="fontBold bg-slate-500  text-white p-4">Status</th>
                <th className="fontBold bg-slate-500  text-white p-4">Action</th>

              </tr>
            </thead>
            <tbody className="p-5 ">
              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4">1110</td>
                <td className="text-center p-4">John</td>
                <td className="text-center p-4">
                  Doe
                </td>
                <td className="text-center p-4">Doe22145@yahoo.com</td>
                <td className="text-center p-4">923312440</td>
                <td className="text-center p-4 "><span className="bg-green-400 p-2 rounded-md">Active</span></td>
                <td className="text-center p-4"><div className="hover:visible">
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
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4 bg-white">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">2 days ago</td>
                <td className="text-center p-4 bg-white"><span className="bg-red-500 p-2 rounded-md">cancelled</span></td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">99</td>

              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4">2 days ago</td>
                <td className="text-center p-4 "><span className="bg-gray-400 p-2 rounded-md">pending payment</span></td>
                <td className="text-center p-4">$19.99</td>
                <td className="text-center p-4">9</td>

              </tr>
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4 bg-white">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">2 days ago</td>
                <td className="text-center p-4 bg-white"><span className="bg-green-300 p-2 rounded-md">pending payment</span></td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">99</td>

              </tr>
              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4">2 days ago</td>
                <td className="text-center p-4 "><span className="bg-gray-400 p-2 rounded-md">pending payment</span></td>
                <td className="text-center p-4">$19.99</td>
                <td className="text-center p-4">99</td>

              </tr>
              <tr className="p-5">
                <td className="text-center p-4 bg-white">
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4 bg-white">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4 bg-white">2 days ago</td>
                <td className="text-center p-4 bg-white"><span className="bg-green-300 p-2 rounded-md">pending payment</span></td>
                <td className="text-center p-4 bg-white">$19.99</td>
                <td className="text-center p-4 bg-white">8</td>

              </tr>

              <tr className="p-5">
                <td className="text-center p-4">
                  <input type="checkbox" />
                </td>

                <td className="text-center p-4">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center p-4">2 days ago</td>
                <td className="text-center p-4 "><span className="bg-gray-400 p-2 rounded-md">pending payment</span></td>
                <td className="text-center p-4">$19.99</td>
                <td className="text-center p-4">29</td>

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
