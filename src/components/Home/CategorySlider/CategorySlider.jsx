import sectionHeaderImg from '../../../assets/sectionHeaderImg.png'
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CategorySlider.css'

const CategorySlider = () => {
    return (
        <div>
            <div className="divider w-56 mx-auto mb-8"><img className='w-16 border rounded-full p-2' src={sectionHeaderImg} alt="" /></div>
            <h2 className='font-extrabold text-center text-3xl mb-5' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Shop By Category</h2>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='border p-1'>
                            <img className='rounded-full mb-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/3_39dc47f3-fd40-4289-9487-e83233143888.png?v=1613688286'} alt="" />
                            <h3 className='font-bold text-3xl text-error hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Girls</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border p-1'>
                            <img className='rounded-full mb-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/1_912ac980-6153-47fd-a76d-eb4dcb3d132e.png?v=1613688287'} alt="" />
                            <h3 className='font-bold text-3xl text-error hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Toys</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border p-1'>
                            <img className='rounded-full mb-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/4_1b9d45dd-2d05-438a-97d2-0ee07d1a075d.png?v=1613688286'} alt="" />
                            <h3 className='font-bold text-3xl text-error hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Boys</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border p-1'>
                            <img className='rounded-full mb-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/5.png?v=1613688285'} alt="" />
                            <h3 className='font-bold text-3xl text-error hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Shoes</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border p-1'>
                            <img className='rounded-full mb-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/2_a5cf1027-cd2e-4c4d-bdd4-539507e3e2e6.png?v=1613688285'} alt="" />
                            <h3 className='font-bold text-3xl text-error hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Girls</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border p-1'>
                            <img className='rounded-full mb-3' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/6.png?v=1613688286'} alt="" />
                            <h3 className='font-bold text-3xl text-error hover:text-info' style={{ fontFamily: "'Baloo Paaji 2', cursive" }}>Kids</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CategorySlider;