import React, { useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { PiSeat } from "react-icons/pi";

const SeatModal = ({ isOpen, onClose, trip, user }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const seatLimit = trip.totalSeats === 15 ? 3 : 5;

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < seatLimit) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // Save booking function
  const handleSaveBooking = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://trip-tix-production.up.railway.app/trip/createbookings", {
        tripId: trip.id,
        userId: user.id,
        seats: selectedSeats,
        amount: trip.pricePerSeat * selectedSeats.length,
        email: user.email,
      });

      const { reference } = response.data;
      console.log("Booking saved successfully, payment reference:", reference);

      onClose();
    } catch (error) {
      console.error("Error saving booking:", error);
 
    } finally {
      setLoading(false);
    }
  };

  // Proceed to payment function
  const handleProceedToPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://trip-tix-production.up.railway.app/trip/createbookings", {
        tripId: trip.id,
        userId: user.id,
        seats: selectedSeats,
        amount: trip.pricePerSeat * selectedSeats.length,
        email: user.email,
      });

      const { reference } = response.data;
      console.log("Payment initialized, reference:", reference);

      // Redirect to payment page
    //   window.location.href = `/payment?reference=${reference}`;
      window.location.href = 'https://trip-tix-production.up.railway.app/bookings/paystack/callback';

      onClose();
    } catch (error) {
      console.error("Error initializing payment:", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content card_details gap-10 rounded-[20px] p-[10px] px-[20px] sm:px-[40px] h-auto sm:flex w-auto overflow-hidden overflow-y-auto drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
            <div className="py-[40px]">
              <h2 className="text-xl font-semibold mb-4">Select Your Seats</h2>
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: trip.totalSeats }, (_, index) => (
                  <button
                    key={index}
                    className={`seat-button ${
                      selectedSeats.includes(index + 1) ? "bg-green-600" : "bg-gray-300"
                    }`}
                    onClick={() => handleSeatClick(index + 1)}
                    disabled={selectedSeats.includes(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex py-[40px] gap-5 flex-col justify-center items-center">
              <div className="flex gap-4 items-center">
                <PiSeat size={"2rem"} className="text-[#0B142F]" />
                <p className="text-lg font-medium text-black">Available Seat</p>
              </div>
              <div className="flex gap-4 items-center">
                <PiSeat size={"2rem"} className="text-green-600" />
                <p className="text-lg font-medium text-black">Booked Seat</p>
              </div>
              <div className="flex gap-4 items-center">
                <PiSeat size={"2rem"} className="text-amber-500" />
                <p className="text-lg font-medium text-black">Blocked Seat</p>
              </div>
            </div>
            <div className="modal-actions flex gap-4 justify-end">
              <button className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="btn-save" onClick={handleSaveBooking} disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                className="btn-proceed"
                onClick={handleProceedToPayment}
                disabled={loading || selectedSeats.length === 0}
              >
                {loading ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
            <span
              onClick={onClose}
              className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border transform transition-transform duration-300 hover:scale-105"
            >
              <IoClose size={"1.5rem"} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatModal;
