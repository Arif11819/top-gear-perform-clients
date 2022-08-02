import React from 'react';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import FavoriteApps from './ExploreProduct/FavoriteApps/FavoriteApps';

const Home = () => {
    return (
        <div>
            <ExploreProduct />
            <FavoriteApps />
        </div>
    );
};

export default Home;