import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import CategorySlider from '../CategorySlider/CategorySlider';
import ImageGrid from '../ImageGrid/ImageGrid';

const Home = () => {
    return (
        <div>
            <Banner> </Banner>
            <Items></Items>
            <CategorySlider></CategorySlider>
            <ImageGrid></ImageGrid>
        </div>
    );
};

export default Home;