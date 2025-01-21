import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:5037/Api/Reservation');
                setReservations(response.data);
                console.log("Response",response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
        // try {
        //     await axios.post('http://localhost:5151/Api/Makemytrip/DeleteReservation', { ReservationId: id });
        //     setReservations(reservations.filter(reservation => reservation.Id !== id));
        // } catch (error) {
        //     console.error('Error deleting reservation:', error);
        // }
    };

    return (
        <div>
            <h2>All Reservations</h2>
            <a href="/MainDashboard/prodadd2" className="btn btn-sm btn-primary">Add Reservation</a>
            <a href="/MainDashboard/prodadd2" className="btn btn-sm btn-secondary">Get Reservation</a>

            <table className="table table-sm table-striped table-bordered m-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Start Location</th>
                        <th>End Location</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(r => (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.name}</td>
                            <td>{r.startLocation}</td>
                            <td>{r.endLocation}</td>
                            <td>
                                <a href={`/MainDashboard/prodadd2/${r.Id}`}>Edit</a>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(r.Id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reservations;