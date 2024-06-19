import React, { useState } from 'react';
import Bus from "../assets/images/bus22.png"
import { BsAlarm, BsArrowRight, BsBusFrontFill } from 'react-icons/bs';
import SeatModal from './SeatModal';

const TripCard = ({ tripData }) => {
  const { departureTime, arrivalTime, origin, destination, seatsAvailable, adultPrice, childPrice } = tripData;
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);

  const handleSeatModalClose = () => {
    setIsSeatModalOpen(false);
  };

  const handleOpenSeatModal = () => {
    setIsSeatModalOpen(true);
  };

  return (
    <div className=" my-10 md:px-10 mx-auto space-x-4 bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src={Bus} alt="Bus" className="object-cover h-full w-full" />
      </div>
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div className="flex flex-wrap gap-14 justify-between items-center mb-2">
          <div className="flex  items-center">
            <BsBusFrontFill className="text-gray-500 mr-2" />
            <p className="text-gray-500">Bus</p>
          </div>
          <div className="flex items-center space-x-1">
            <BsAlarm />
            <p className="text-gray-500">14hr 30min</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{departureTime}</p>
            <p className="text-lg font-semibold">{destination}</p>
          </div>
          <BsArrowRight className="text-gray-500" />
          <div>
            <p className="text-lg font-semibold">{arrivalTime}</p>
            <p className="text-gray-500 mb-2">{origin}</p>
          </div>
        </div>
        <p className="text-gray-500 mb-2">{seatsAvailable}</p>
        <div className="flex justify-between items-center mb-2">
          <p className="text-green-600 font-semibold">Adult ₦{adultPrice}</p>
          <p className="text-green-600 font-semibold">Child ₦{childPrice}</p>
        </div>
        <button onClick={handleOpenSeatModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Seats
        </button>
      </div>
      <SeatModal
        isOpen={isSeatModalOpen}
        onClose={handleSeatModalClose}
      />
    </div>
  );
};

export default TripCard;