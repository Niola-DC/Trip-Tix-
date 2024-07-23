import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

export function TransportFilter({ onSubmit }) {
  const [form, setForm] = useState({
    from: "Lagos",
    to: "Enugu",
    date: "",
    returnDate: "",
    passengers: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios
      .get("/trip/search", {
        params: form,
      })
      .then((response) => {
        onSubmit(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
        setError("Failed to fetch trips.");
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center rounded-md px-4 py-2"
    >
      <div className="bg-white md:h-20 flex flex-col md:flex-row items-center py-2 pl-2 rounded-tl-md rounded-bl-md">
        <div className="flex w-full items-center space-x-2">
          <div className="flex-grow">
            <label className="text-gray-500 text-sm">From</label>
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              className="w-full p-2 rounded outline-none bg-transparent"
            />
          </div>
          <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-500" />
          <div className="flex-grow">
            <label className="text-gray-500 text-sm">To</label>
            <input
              name="to"
              value={form.to}
              onChange={handleChange}
              className="w-full p-2 rounded outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-gray-500 text-sm">Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
          />
        </div>
        <div className="w-full">
          <label className="text-gray-500 text-sm">Return Date</label>
          <input
            name="returnDate"
            type="date"
            value={form.returnDate}
            onChange={handleChange}
            placeholder="Optional"
            className="w-full p-2 bg-transparent py-3 rounded outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <label className="text-gray-500 text-sm">Passengers</label>
            <input
              name="passengers"
              type="number"
              min="1"
              value={form.passengers}
              onChange={handleChange}
              className="w-20 p-2 py-3 bg-transparent rounded outline-none"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 w-full py-5 md:w-fit md:h-20 rounded-tr-md rounded-br-md flex items-center space-x-5"
      >
        <FontAwesomeIcon icon={faSearch} className="text-white" />
        <span>Update</span>
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </form>
  );
}
