import React from 'react';
import { Link } from 'react-router-dom';

import ErrorPage from '../../../../assets/404page/404page.webp'

const About = () => {
    return (
        <div className='flex'>
             <div>

             <img  src={ErrorPage} alt=''></img>

             </div>

             <div className=' mt-24'>
             <h1 className='text-5xl mb-3 font-bold'> Oops ! </h1>
             <h1 className='text-2xl mb-3 font-bold'>404- PAGE NOT FOUND ! </h1>
          <Link to='/'> <button className="btn btn-wide btn-outline ">GO TO HOMEPAGE</button></Link>
             </div>
        </div>
    );
};

export default About;