import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStateContext } from '../../../context/ContextProvider';
import axiosClient from '../../../../axiosClient';

const ViewTicket = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {token} = useStateContext();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      // First, fetch the user data
      axiosClient.get('/api/user')
        .then(userResponse => {
          const userId = userResponse.data.id; // Extract user ID from response
          setUser(userResponse.data);

          // Then fetch the user's bookings using the user ID
          return axiosClient.get(`/api/user/bookings?userId=${userId}`);
        })
        .then(bookingsResponse => {
          setBookings(bookingsResponse.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data.');
          setLoading(false);
        });
    } else {
      // No token, user is not authenticated
      setError('User is not authenticated.');
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return (
      <div className="view-ticket cursor-pointer mt-[200px] sm:mt-[0px] w-full px-12 pt-[300px] pb-[100px] h-auto flex flex-col gap-[20px] justify-center items-center bg-white leading-[42.36px] text-red-600 font-[600] text-[30px] xl:text-[35px] lg:text-[35px]">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="view-ticket cursor-pointer mt-[250px] sm:mt-[0px] w-full px-12 pt-[300px] pb-[100px] h-auto flex flex-col gap-[20px] justify-center items-center bg-white">
      <p className="text-[#616262] font-[600] text-[30px] xl:text-[35px] lg:text-[35px] justify-center text-center leading-[42.36px]">
        View your previously booked tickets
      </p>
      <div className="text-[#0E385C] rounded-[8px] p-[10px] px-[20px] border bg-transparent font-[500] text-[22px] leading-[26.63px] border-[#0E385C]">
      <ul>
        {bookings.map(booking => (
          <li key={booking.id} className="booking-item">
            <div className="trip-details">
              <p><strong>Departure:</strong> {new Date(booking.departureDateTime).toLocaleString()}</p>
              <p><strong>Arrival:</strong> {new Date(booking.arrivalDateTime).toLocaleString()}</p>
              <p><strong>Vehicle Type:</strong> {booking.vehicleType.replace(/[\[\]"]/g, '')}</p>
              <p><strong>Price:</strong> ${booking.price.toFixed(2)}</p>
            </div>
            <div className="seat-details">
              <p><strong>Seat Number:</strong> {booking.seatNumber}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ViewTicket;
