import React from 'react';

const Items = () => {
    return (
        <div className='mb-20 w-4/5 mx-auto border md:w-11/12 lg:w-11/12 md:p-1 lg:p-1'>
            <div className="flex w-3/4 mx-auto flex-col lg:w-full md:w-full md:flex-row lg:flex-row">
                <div className="grid flex-grow h-40">
                    <div className='text-center mx-auto'>
                        <img className='mx-auto mb-3 mt-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/1_250c41a4-9ea6-4861-a1cc-a83f0ceccefd.png?v=1613691038'} alt="" />
                        <div>
                            <h3 className='font-bold text-lg hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Worldwide Delivery</h3>
                            <p>Lorem ipsum Is Dummy Text
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-40">
                    <div className='text-center mx-auto'>
                        <img className='mx-auto mb-3 mt-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/2_0fcf4921-480a-4a1e-a06d-064f4b087b54.png?v=1613691039'} alt="" />
                        <div>
                            <h3 className='font-bold text-lg hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Gift Voucher</h3>
                            <p>Lorem ipsum Is Dummy Text
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-40">
                    <div className='text-center mx-auto'>
                        <img className='mx-auto mb-3 mt-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/3_27722683-0376-4c36-bda7-ca7881715edc.png?v=1613691040'} alt="" />
                        <div>
                            <h3 className='font-bold text-lg hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>24x7 Support</h3>
                            <p>Lorem ipsum Is Dummy Text
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-40">
                    <div className='text-center mx-auto'>
                        <img className='mx-auto mb-3 mt-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/4_af6a98e8-860a-4a3c-836d-d7ab8bc63440.png?v=1613691041'} alt="" />
                        <div>
                            <h3 className='font-bold text-lg hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Great Saving</h3>
                            <p>Lorem ipsum Is Dummy Text
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;