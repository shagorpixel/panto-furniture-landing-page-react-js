import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation,Autoplay } from 'swiper/modules';
import { reviews } from '../utilities/Review';
import Rating from './Rating';

const Testimonial = () => {
    return (
        <section className='section-container pb-32 pt-12'>
            <h3 className=' text-primary font-semibold text-center'>Testimonials</h3>
            <h2 className=' text-2xl font-bold text-center mb-6'>Our Client Reviews</h2>
           
            <Swiper 
             autoplay={{
              delay: 1500
            }}
            loop
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {
            reviews.map((review,index)=>(
            <SwiperSlide key={index} style={{backgroundImage:`url(${review.coverImg
            })`}} className=' bg-cover bg-no-repeat rounded-lg '>
                <div className='h-[500px]  w-full flex items-end justify-center mb-32'>
                    <div className=' w-10/12 bg-white py-5 px-2 text-center rounded-md space-y-3'>
                        <img className=' mx-auto -mt-10 rounded-full  ring-white ring-8' src={review.image} alt="" />

                        <div className=' '>
                          <h2 className=' font-semibold text-lg leading-1'>{review.name}</h2>
                          <span className=' text-xs text-secondary leading-1'>{review.title}</span>
                        </div>

                        <div className=' min-h-18'>
                          <p className=' max-w-52 mx-auto text-xs '>{review.review}</p>
                          <div className=' flex justify-center'>
                          <Rating rating={review.rating}></Rating>
                          </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
                
            ))
        }
        
        </Swiper>
   
        </section>
    );
};

export default Testimonial;