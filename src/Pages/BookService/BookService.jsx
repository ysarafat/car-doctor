import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Checkout() {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const handelBookingForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const customerName = form.name.value;
        const customerEmail = form.email.value;
        const service = form.service.value;
        const bookingDate = form.date.value;
        const price = form.price.value;
        const bookingAmount = form.bookingAmount.value;
        const bookingNotes = form.details.value;
        const dueAmount = price - bookingAmount;

        const booking = {
            customerName,
            customerEmail,
            service,
            bookingDate,
            price,
            img,
            bookingAmount,
            dueAmount,
            bookingNotes,
            serviceId: _id,
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div className="my-16">
            <h1 className="text-4xl text-deep-dark text-center font-bold">{service.title}</h1>
            <h3 className="text-2xl text-deep-dark text-center my-5">Checkout</h3>
            <div className="bg-form p-16 rounded-lg">
                <form onSubmit={handelBookingForm} action="">
                    <div className="flex gap-6 items-center mb-6">
                        <input
                            className="w-full h-11 px-3 outline-primary border border-light-text shadow rounded-lg"
                            type="text"
                            placeholder="Customer Name"
                            defaultValue={user?.displayName}
                            name="name"
                        />
                        <input
                            className="w-full h-11 px-3 outline-primary border border-light-text shadow rounded-lg"
                            type="email"
                            placeholder="Customer Email"
                            defaultValue={user?.email}
                            name="email"
                        />
                    </div>
                    <div className="flex gap-6 items-center ">
                        <input
                            className="w-full h-11 px-3 outline-primary border border-light-text shadow rounded-lg"
                            type="text"
                            placeholder="Service Name"
                            defaultValue={title}
                            readOnly
                            name="service"
                        />
                        <input
                            className="w-full h-11 px-3 outline-primary border border-light-text shadow rounded-lg"
                            type="date"
                            placeholder=""
                            name="date"
                        />
                    </div>
                    <div className="flex gap-6 items-center my-6 ">
                        <input
                            className="w-full h-11 px-3 outline-primary border border-light-text shadow rounded-lg"
                            type="number"
                            placeholder="Service Price"
                            defaultValue={price}
                            readOnly
                            name="price"
                        />
                        <input
                            className="w-full h-11 px-3 outline-primary border border-light-text shadow rounded-lg"
                            type="number"
                            placeholder="Booking Amount"
                            name="bookingAmount"
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full p-3 outline-primary border border-light-text shadow rounded-lg"
                            name="details"
                            id=""
                            cols="60"
                            rows="10"
                            placeholder="Booking Note"
                        />
                    </div>
                    <input
                        className="w-full mt-6 bg-primary h-11 text-lg font-semibold text-white rounded-lg hover:bg-deep-dark duration-300"
                        type="submit"
                        value="Order Confirm"
                    />
                </form>
            </div>
        </div>
    );
}

export default Checkout;
