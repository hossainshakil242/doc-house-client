import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className='mx-auto'>
            <div className='space-y-5'>
                <h2 className='text-3xl font-semibold text-center'>What Our Patients Says</h2>
                <p className='w-2/3 mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='text-center'>
                    Slide one
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                {
                    
                }


            </Swiper>
        </div>
    );
};

export default Reviews;