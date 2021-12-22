import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car/index.tsx';
import { ICar } from '../../../typings/car.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import SwiperCore, {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from 'swiper';
SwiperCore.use([Pagination, Navigation, EffectCoverflow, Autoplay]);
const TopCarsContainer = styled.div`
  ${tw`
max-w-screen-lg
w-full
flex
flex-col
items-center
justify-center
pr-4
pl-4
md:pl-0
md:pr-0
mb-10
transition-all
    duration-200
    ease-in-out
`}
`;
const Title = styled.h2`
  ${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`}
`;
const CarsContainer = styled.div`
  ${tw`
w-full
flex
flex-wrap
justify-center
mt-7
md:mt-10
`}
`;

export function TopCars() {
  const [current, setcurrent] = useState(0);
  const testCar: ICar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar2: ICar = {
    name: 'HONDA cITY 5 Seater Car',
    mileage: '20k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  return (
    <TopCarsContainer id="cars">
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          //   navigation={true}
          className="mySwiper"
          slidesPerView={2}
          spaceBetween={30}
        >
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
        </Swiper>
      </CarsContainer>
    </TopCarsContainer>
  );
}
