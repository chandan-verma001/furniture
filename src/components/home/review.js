import React from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import Avatar from '../../images/review_avatar.png'
import Star from '../../images/Star.png'
// import required modules
import { Pagination ,Navigation, Autoplay} from 'swiper/modules';

const Review = () => {
    return(
        <>
        <section className="review-js">
          <div className="container">
            <Swiper slidesPerView={1} centeredSlides={true} spaceBetween={320} pagination={true} navigation={true} autoplay={true} modules={[Pagination,Navigation,Autoplay]} className="mySwiper">
              <SwiperSlide>
                <div className="container">
                  <div className="review_box_wraper">
                    <h1>REVIEWD BY CUSTOMERS</h1>
                    <h3>WHAT OUR CUSTOMERS THINK ABOUT US?</h3>
                    <div className="review_img_sec">
                    <img className='review_img_avatar' src={Avatar} alt=""/>
                    <img className='review_img_star' src={Star} alt=""/>
                    </div>
                    <p>The sofa is not only incredibly stylish, but also very comfortable to lounge on. The clean lines and minimalist design make it a perfect fit for my modern living room, and the neutral color scheme allows me to easily incorporate other accent pieces. The sofa is also very sturdy and well-constructed, so I know it will last me for years to come." 
                      <span>-  Larry Jonhson  -</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container">
                  <div className="review_box_wraper">
                    <h1>REVIEWD BY CUSTOMERS</h1>
                    <h3>WHAT OUR CUSTOMERS THINK ABOUT US?</h3>
                    <div className="review_img_sec">
                    <img className='review_img_avatar' src={Avatar} alt=""/>
                    <img className='review_img_star' src={Star} alt=""/>
                    </div>
                    <p>The sofa is not only incredibly stylish, but also very comfortable to lounge on. The clean lines and minimalist design make it a perfect fit for my modern living room, and the neutral color scheme allows me to easily incorporate other accent pieces. The sofa is also very sturdy and well-constructed, so I know it will last me for years to come." 
                      <span>-  Larry Jonhson  -</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="container">
                  <div className="review_box_wraper">
                    <h1>REVIEWD BY CUSTOMERS</h1>
                    <h3>WHAT OUR CUSTOMERS THINK ABOUT US?</h3>
                    <div className="review_img_sec">
                    <img className='review_img_avatar' src={Avatar} alt=""/>
                    <img className='review_img_star' src={Star} alt=""/>
                    </div>
                    <p>The sofa is not only incredibly stylish, but also very comfortable to lounge on. The clean lines and minimalist design make it a perfect fit for my modern living room, and the neutral color scheme allows me to easily incorporate other accent pieces. The sofa is also very sturdy and well-constructed, so I know it will last me for years to come." 
                      <span>-  Larry Jonhson  -</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <hr/>  
          </div>
        </section>
         </>
    )
}
export default Review