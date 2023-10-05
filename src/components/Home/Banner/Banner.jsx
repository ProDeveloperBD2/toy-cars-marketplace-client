
const Banner = () => {
    return (
        <div className='md:mb-20 lg:mb-20'>
            <div className="carousel" style={{ height: '500px' }}>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://toytown-ishi.myshopify.com/cdn/shop/files/3_c4bd8fcc-b35d-4d10-9b62-08faf030aa01.png?v=1613730027'} className="md:w-full md:h-full lg:w-full lg:h-full h-96" />
                    <div className="md:absolute md:justify-start md:transform md:-translate-y-1/2 md:left-2/4 md:top-1/2 lg:absolute lg:justify-start lg:transform-translate-y-1/2 lg:left-2/4 lg:top-1/2 absolute justify-start transform top-28 left-56">
                        <h4 className='md:text-4xl md:font-extrabold md:mb-4 lg:text-4xl lg:font-extrabold lg:mb-4 text-2xl text-center mb-2 text-[orange]'>Hot & Trendy</h4>
                        <h1 className='md:text-6xl md:font-extrabold md:mb-3 lg:text-6xl lg:font-extrabold lg:mb-3 text-4xl text-center font-extrabold' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Baby Kids Cloth</h1>
                        <p className='md:text-xl md:font-extrabold md:mb-9 lg:text-xl lg:font-extrabold lg:mb-9 text-sm text-center mb-6 mt-1 text-slate-600'>Get Upto 30% Off On Your First Order
                        </p>
                        <div className='flex justify-center'>
                            <button className='btn btn-info text-white text-lg'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-info text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-info text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://toytown-ishi.myshopify.com/cdn/shop/files/4_ddc88a27-65d9-4b77-84f7-e040218d006f.png?v=1613730027'} className="md:w-full md:h-full lg:w-full lg:h-full h-96" />
                    <div className="md:absolute md:justify-end md:transform md:-translate-y-1/2 md:left-40 md:top-1/2 lg:absolute lg:justify-end lg:transform-translate-y-1/2 lg:left-40 lg:top-1/2 absolute justify-end transform top-28 left-14">
                        <h4 className='md:text-4xl md:font-extrabold md:mb-4 lg:text-4xl lg:font-extrabold lg:mb-4 text-2xl text-center mb-2 text-[orange]'>Hot & Trendy</h4>
                        <h1 className='md:text-6xl md:font-extrabold md:mb-3 lg:text-6xl lg:font-extrabold lg:mb-3 text-4xl text-center font-extrabold' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Beautiful Toys
                        </h1>
                        <p className='md:text-xl md:font-extrabold md:mb-9 lg:text-xl lg:font-extrabold lg:mb-9 text-sm text-center mb-6 mt-1 text-slate-600'>Get Upto 30% Off On Your First Order
                        </p>
                        <div className='flex justify-center'>
                            <button className='btn btn-info text-white text-lg'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-info text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-info text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;