import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTicket = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://trip-tix-production.up.railway.app/trip/bookings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch bookings.');
        setLoading(false);
      });
    } else {
      // No token, user is not authenticated
      setError('User is not authenticated.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-lg text-red-600 mt-10">
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
            <li key={booking.id}>{booking.trip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewTicket;
