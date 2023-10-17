import img1 from '../../../assets/home/banner/image1.png';
import img2 from '../../../assets/home/banner/image2.png';
import img3 from '../../../assets/home/banner/image3.png';
const Banner = () => {
    return (
        <div className="bg-[#07332F] mx-w-[1600] mx-2 text-white py-36">
            <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                <div className='text-center md:text-left space-y-3'>
                    <h1 className='text-5xl font-semibold'>Your Best Medical<br />Help Center</h1>
                    <p>Lorem Ipsum is simply dummy text they are printing typesetting <br/> has been the industry’s stardard.</p>
                    <button className="btn btn-success">All Service</button>
                </div>
                <div className='relative p-28'>
                    <img src={img1} className='absolute top-0 left-0' alt="" />
                    <img src={img2} className='absolute top-1/2 left-3/5 ' alt="" />
                    <img src={img3} className='absolute -top-10 -right-full ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;