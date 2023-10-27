import group1 from '../../../assets/appointment/group1.png'
import group2 from '../../../assets/appointment/group2.png'
import group3 from '../../../assets/appointment/group3.png'
import group4 from '../../../assets/appointment/group4.png'
import group5 from '../../../assets/appointment/group5.png'
import group6 from '../../../assets/appointment/group6.png'

const MiniSevice = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <h1 className='text-3xl font-semibold text-center'>Please select a service.</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-20'>
                <div className='flex items-center shadow-lg p-4 space-x-4'>
                    <img src={group1} className='w-20 bg-pink-200 p-5 rounded-lg' alt="" />
                    <p className='text-xl font-semibold'>Teeth Orthodontics</p>
                </div>
                <div className='flex items-center shadow-lg p-4 space-x-4'>
                    <img src={group2} className='w-20 bg-pink-200 p-5 rounded-lg' alt="" />
                    <p className='text-xl font-semibold'>Teeth Orthodontics</p>
                </div>
                <div className='flex items-center shadow-lg p-4 space-x-4'>
                    <img src={group3} className='w-20 bg-pink-200 p-5 rounded-lg' alt="" />
                    <p className='text-xl font-semibold'>Teeth Orthodontics</p>
                </div>
                <div className='flex items-center shadow-lg p-4 space-x-4'>
                    <img src={group4} className='w-20 bg-pink-200 p-5 rounded-lg' alt="" />
                    <p className='text-xl font-semibold'>Teeth Orthodontics</p>
                </div>
                <div className='flex items-center shadow-lg p-4 space-x-4'>
                    <img src={group5} className='w-20 bg-pink-200 p-5 rounded-lg' alt="" />
                    <p className='text-xl font-semibold'>Teeth Orthodontics</p>
                </div>
                <div className='flex items-center shadow-lg p-4 space-x-4'>
                    <img src={group6} className='w-20 bg-pink-200 p-5 rounded-lg' alt="" />
                    <p className='text-xl font-semibold'>Teeth Orthodontics</p>
                </div>
            </div>
        </div>
    );
};

export default MiniSevice;