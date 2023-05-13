/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

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
    }, []);
    console.log(booking);
    return (
        <div>
            <h1>a</h1>
        </div>
    );
}

export default Booked;
