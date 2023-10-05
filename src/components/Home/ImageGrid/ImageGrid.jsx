
const ImageGrid = () => {
    return (
        <div className='md:flex w-96 md:w-full mx-auto md:gap-6 md:justify-center mt-20 mb-20 lg:flex lg:w-full lg:gap-6 lg:justify-center'>
            <div>
                <img className='rounded-xl mb-7' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/1_9c020597-a027-47e0-92bc-20b8c9a9ef08.png?v=1613688290'} alt="" />
            </div>
            <div>
                <img className='rounded-xl' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/2_406586b1-ed7f-47d8-aae6-1db8593cde1d.png?v=1613688290'} alt="" />
                <img className='rounded-xl mt-7 mb-7' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/3_7b823542-d383-4bf4-9107-2ef7c88b5a85.png?v=1613688290'} alt="" />
            </div>
            <div>
                <img className='rounded-xl' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/4_23d3baf0-cd20-4913-a78b-39c602763791.png?v=1613688290'} alt="" />
            </div>
        </div>
    );
};

export default ImageGrid;