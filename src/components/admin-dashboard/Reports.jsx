import React, { useState } from "react";
import { Link } from "react-router-dom";
import coats from "../../assets/coats.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Reports() {
  const [status, setStatus] = useState("Processing");
  const [selectAll, setSelectAll] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const totalSales = 10000;
  const netSales = 8000;
  const orders = 500;
  const productSales = 2000;
  const visitors = 1000;
  const views = 5000;

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const topCategory = "Electronics";
  const categoryItemsSold = 500;
  const categoryTotalEarnings = 25000;

  const topProduct = {
    name: "Smartphone",
    image: "https://example.com/smartphone-image.jpg",
    quantitySold: 200,
    totalEarnings: 10000,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the selected dates from the state
    const formattedStartDate = startDate ? startDate.toLocaleDateString() : "";
    const formattedEndDate = endDate ? endDate.toLocaleDateString() : "";
    
    // Display the selected dates in an alert
    alert(`Selected date range: ${formattedStartDate} - ${formattedEndDate}`);
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
            <div className="p-4 bg-slate-400 border-b  ">
              <Link to="/Reports" className="text-black  ">
                <div>Analysis</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
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
      <div className="p-4 bg-white rounded shadow">
  <h1 className="text-2xl font-bold mb-4 fontBold">Reports</h1>
  <form onSubmit={handleSubmit}>
  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 bg-slate-200 rounded-lg shadow-lg p-4">
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Total Sales</strong>
        <div className="mt-4">999</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Net Sales</strong>
        <div className="mt-4">999</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Orders </strong>
        <div className="mt-4">$12</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Product Sales</strong>
        <div className="mt-4">$1200</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Visitors</strong>
        <div className="mt-4">123</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Views</strong>
        <div className="mt-4">999</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-6 text-center">
        <strong className="text-sm fontBold">Returns</strong>
        <div className="mt-4">23</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="border border-slate-300 bg-white rounded p-4">
        <strong>Date Range:</strong>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  </div>
  </form>
</div>

      </div>

      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div>
          <div className="border-b border-gray-300 p-4 font-bold ">
            <h1 className="uppercase fontBold">Item mostly sold</h1>
          </div>
          <div className="p-4 bg-slate-200 rounded-lg shadow-lg ">
            <div className="flex items-center">
              <img
                src={coats}
                alt={topProduct.name}
                className="w-12 h-12 mr-4"
              />
              <div>
                <p>Name: {topProduct.name}</p>
                <p>Quantity Sold: {topProduct.quantitySold}</p>
                <p>Total Earnings: ${topProduct.totalEarnings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
