/* eslint-disable no-underscore-dangle */
import React from 'react';

function BookedCard({ booked }) {
    const handelDelete = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                console.log(res);
            })
            .then((data) => {
                console.log(data);
            });
    };
    return (
        // <div className="flex justify-between w-full">
        //     <div className="avatar">
        //         <div className="w-24 rounded">
        //             <img src={img} alt="" />
        //         </div>
        //         <div>
        //             <h2>{service}</h2>
        //         </div>
        //         <div>
        //             <p>Total Price : ${price}</p>
        //             <p>Booking Amoutn : ${bookingAmount}</p>
        //             <p>Due Amount : ${dueAmount}</p>
        //         </div>
        //         <div>
        //             <p>{bookingDate}</p>
        //         </div>
        //         <button>Pending</button>
        //     </div>
        // </div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th />
                        <th>Image</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Booking Amount</th>
                        <th>Due Amount</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {booked?.map((bk) => (
                        <tr key={bk._id}>
                            <th>
                                <button
                                    onClick={() => handelDelete(bk._id)}
                                    className="btn btn-sm btn-circle"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center ">
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={bk.img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h3 className="text-xl font-semibold">{bk.service}</h3>
                                <br />
                            </td>
                            <td>${bk.price}</td>
                            <td>${bk.bookingAmount ? bk.bookingAmount : 0}</td>
                            <td>${bk.dueAmount ? bk.dueAmount : 0}</td>
                            <th>{bk.bookingDate}</th>
                            <td>
                                <button>Pending</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookedCard;
