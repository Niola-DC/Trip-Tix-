import React, { useState } from "react";
import { Link } from "react-router-dom";
import coats from "../../assets/coats.jpeg";
import Button from "../Button";

export default function Layout() {
  const [status, setStatus] = useState("Processing");
  const [selectAll, setSelectAll] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((category) => category !== value));
    }
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);

    const checkboxes = document.querySelectorAll(
      'tbody input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
    });
  };

  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
        <ul className="px-4">
          <li>
            <div className="fontBold">Welcome Admin</div>
          </li>
          <li>
            <div className="p-4 hover:bg-slate-300 border-b">
              <Link to="/EditHomepage" className="text-black  ">
                <div>EditHomepage</div>
              </Link>
            </div>
            <div className="p-4 hover:bg-slate-300 border-b  ">
              <Link to="/Reports" className="text-black  ">
                <div>Analysis</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  bg-slate-400 border-b">
              <Link to="/EditOrder" className="text-black active">
                <div>Edit Order</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/Products" className="text-black ">
                <div>Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/NewProducts" className="text-black ">
                <div>New Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/Order" className="text-black ">
                <div>Order</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/" className="text-black ">
                <div>Logout</div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="main-content flex-1 bg-white h-[100vh] overflow-scroll p-4">
        <header>
          <div className="flex my-4 items-center">
            <h1 className="fontBold text-lg">Edit Order</h1>
          </div>
        </header>
        <div className="bg-slate-200 rounded-lg shadow-lg p-4">
          <div className="  p-4 bg-white rounded shadow">
            <h1 className="text-2xl fontBold uppercase mb-4">
              Order Label <span>#599</span>
            </h1>
            <div className="uppercase ">
              <p className="fontBold mb-4">
                Payment via credit card (Stripe){" "}
                <Link className="underline fontBold">ch KLnSjnfjJDkdB</Link> Paid on May
                1, 2023 @2:23pm.
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <div>
                <h2 className="fontBold">General</h2>
                <h4>Date created</h4>
                <span>2023/07/23</span>
              </div>
              <div>
                <h2 className="fontBold">Billing</h2>

                <span>123 Main St, City, State</span>
              </div>
              <div>
                <h2 className="fontBold">Shipping</h2>
                123 Main St, City, State
              </div>
            </div>

            <div className="mb-4">
              <strong className="fontBold">Status:</strong>
              <select
                value={status}
                onChange={handleStatusChange}
                className="block mt-1 w-full rounded-md border-gray-300 border focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-4"
              >
                <option value="Processing">Processing</option>
                <option value="On Hold">On Hold</option>
                <option value="Pending">Pending</option>
                <option value="Pending">Processing</option>
                <option value="Pending">Completed</option>
                <option value="Pending">Cancelled</option>

                {/* Add more options here */}
              </select>
            </div>
            <div className="mb-2">
              <strong className="fontBold">Customer:</strong>
              <div>JohnDoe</div>
            </div>

            <div className="mb-2">
              <strong className="fontBold">Gender:</strong>
              <div>Male</div>
            </div>
            <div className="mb-2">
              <strong className="fontBold">Email:</strong>
              <div className="">johndoe@example.com</div>
            </div>
          </div>
          <table className="w-full border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="font-bold bg-slate-500 p-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="fontBold bg-slate-500 p-2 uppercase text-white">Image</th>
                <th className="fontBold bg-slate-500 p-2 uppercase text-white">Name</th>
                <th className="fontBold bg-slate-500 p-2 uppercase text-white">Cost</th>

                <th className="fontBold bg-slate-500 p-2 uppercase text-white">Qty</th>
                <th className="fontBold bg-slate-500 p-2 uppercase text-white">Total</th>
              </tr>
            </thead>
            <tbody className="p-5 ">
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img
                    src={coats}
                    alt="Product"
                    className="w-16 h-16 mx-auto my-3"
                  />
                </td>

                <td className="text-center">
                  <Link to="/">Louviena Gucci savaeleone</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                  </div>
                </td>
                <td className="text-center">$2499</td>

                <td className="text-center">*2</td>
                <td className="text-center">$19.99</td>
              </tr>
            </tbody>
          </table>
         <Button text="Refund"/>
        </div>
      </div>

      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div>
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className=" py-4 fontBold text-2xl">Order Actions</h2>
            <p></p>
          </div>
       <div className="m-4">
       <Button text=" Move to Trash" />
       </div>
        </div>
      </div>
    </div>
  );
}
