import React from 'react';
import { Link } from 'react-router-dom';
import Extrapic from '../../../assets/Extra/Extrabanner.gif'

const Extra = () => {
  return (


    <div className='mb-10 mt-10'>



      <h1 className='text-4xl font-bold mt-5 mb-5 md: text-2xl mt-5'> Did You Know, Before You Buy !</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={Extrapic} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold"> 10 Things to Check Before Buying a Used Car !</h2>
          <p className='text-xl font-bold  text-error'>
            <ul>
              <li>1. Vehicle history.</li>
              <li>2. Rust or paint damage.</li>
              <li>3. Frame issues.</li>
              <li>4. Under the hood.</li>
              <li>5. Tire condition.</li>
              <li>6. Mileage.</li>
              <li>7. Interior electronics.</li>
              <li>8. Upholstery.</li>
              <li>9. Test drive.</li>
              <li>10. Mechanic inspection.</li>

            </ul>
          </p>
          <div className="card-actions justify-end">
            <Link to='/categories'> <button className="btn btn-primary">Buy Now</button> </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Extra;