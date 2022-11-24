import React from 'react';
import Categories from '../Common/Header/Categories/Categories';
import Banner from './Banner/Banner';
import Extra from './Extra/Extra';

const Home = () => {
    return (
        <div className='mx-5'>

            <Banner></Banner>
            <Categories></Categories>
            <Extra></Extra>

        </div>
    );
};

export default Home;