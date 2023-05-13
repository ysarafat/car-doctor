/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import BookedCard from './BookedCard';

function Booked() {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBooking(data);
            });
    }, [booking]);

    return (
        <div className="min-h-[calc(100vh-87px)] my-16">
            <div className="w-full">
                <BookedCard booked={booking} />
            </div>
        </div>
    );
}

export default Booked;
