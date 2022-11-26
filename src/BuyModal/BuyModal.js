
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/Contexts/AuthProvider';


const BuyModal = ({ book, setBook }) => {

    const { user } = useContext(AuthContext)
    const { name, img, resale } = book

    const handleBooking = event => {
        event.preventDefault()

        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingCar = {

            carName: name,
            picture: img,
            sellPrice: resale,
            meeting: location,
            phone
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingCar)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBook(null)
                    toast.success('Congratulation! Car is Booked')
                }

            })


    }


    return (
        <>


            <input type="checkbox" id="buy-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold"> Selected Car: {name}</h3>
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-5 mt-2'>



                        <input type="text" disabled value={user.displayName} className="input input-bordered" />
                        <input type="email" disabled value={user.email} className="input input-bordered" />
                        <input name='name' type="text" disabled value={name} className="input input-bordered" />
                        <input name='location' type="text" placeholder=" Meeting Location" className="input input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered" />

                        <input className='btn btn-black w-full' type="submit" value="Buy Now" />

                    </form>

                </div>
            </div>

        </>
    );
};

export default BuyModal;