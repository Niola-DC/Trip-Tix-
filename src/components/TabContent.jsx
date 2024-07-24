import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";
import { TransportFilter } from "./TransportFilter";
import axiosClient from '../../axiosClient';
import { useNavigate } from 'react-router-dom';
import tripData from "./tripData";

const TabContent = ({ content }) => {
  const [trips, setTrips] = useState(tripData);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);
  const [user, setUser] = useState({ email: "user@example.com" });
  // const navigate = useNavigate();

  const handleTripsSubmit = (fetchedTrips) => {
    setTrips(fetchedTrips);
  };

  const handleOpenSeatModal = (trip) => {
    setSelectedTrip(trip);
    setIsSeatModalOpen(true);
  };

  const handleSeatModalClose = () => {
    setSelectedTrip(null);
    setIsSeatModalOpen(false);
  };

  useEffect(() => {
    // Fetch trips data after signing in
    axiosClient.get('/api/trips')
      .then(response => {
        setTrips(response.data);
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
        // Navigate to login if fetching trips fails
        // navigate('/login');
      });
  }, []);

  return (
    <div className="bg-white p-4 rounded-b-lg md:w-10/12 mx-auto">
      {content}
      <div className="flex justify-between gap-14">
        <div className="departure-times hidden md:block mt-4 space-y-2">
          <h2 className="text-lg font-semibold mb-2">Departure Time</h2>
          <div className="flex items-center space-x-4 text-gray-500 py-2">
            <input
              type="checkbox"
              id="timeOption1"
              name="timeOption1"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="timeOption1" className="text-sm">
              Nighttime (0)
            </label>
            <span className="text-sm">Before 6am</span>
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
            <span className="text-sm">6am - 11am</span>
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
            <span className="text-sm">11am - 5pm</span>
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
            <span className="text-sm">After 5pm</span>
          </div>
        </div>


         <div className="trip-cards-container">
          {trips.length > 0 ? (
            trips.map((trip) => (
              <TripCard
                key={trip.id}
                tripData={trip}
                onOpenSeatModal={() => handleOpenSeatModal(trip)}
              />
            ))
          ) : (
            <div className="no-trips-message">No Trips Available</div>
          )}
        </div>
      </div>

      {/* {selectedTrip && (
        <SeatModal
          isOpen={isSeatModalOpen}
          onClose={handleSeatModalClose}
          trip={selectedTrip}
          user={user}
        />
      )} */}
    </div>
  );
};

export default TabContent;
