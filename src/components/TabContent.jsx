// TabContent.jsx
import React from "react";
import TripCard from "./TripCard";
import tripData from "./tripData"; // Import the tripData array

const TabContent = ({ content }) => {
  return (
    <div className="bg-white p-4 rounded-b-lg  md:w-10/12 mx-auto">
      {content}
      <div className="flex  justify-between gap-14">
        <div className="departure-times hidden md:block mt-4 space-y-2">
          <h2 className="text-lg font-semibold mb-2">Departure Time</h2>
          <div className="flex  items-center space-x-4 text-gray-500 py-2">
            <input
              type="checkbox"
              id="timeOption1"
              name="timeOption1"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="timeOption1" className="text-sm">
              Nighttime (0)
            </label>
            <span className="text-sm">
            Before 6am
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500 py-2">
            <input
              type="checkbox"
              id="timeOption2"
              name="timeOption2"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="timeOption2" className="text-sm">
              Early (2)
            </label>
            <span className="text-sm">
            6am - 11am
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500 py-2">
            <input
              type="checkbox"
              id="timeOption3"
              name="timeOption3"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="timeOption3" className="text-sm">
              Midday (0) 
            </label>
            <span className="text-sm">
            11am - 5pm
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500 py-2">
            <input
              type="checkbox"
              id="timeOption4"
              name="timeOption4"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="timeOption4" className="text-sm">
              Late (0) 
            </label>
            <span className="text-sm">
            After 5pm
            </span>
          </div>
        </div>

        <div>
          {tripData.length > 0 ? (
            tripData.map((trip, index) => (
              <TripCard key={index} tripData={trip} />
            ))
          ) : (
            <p>No trip data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabContent;
