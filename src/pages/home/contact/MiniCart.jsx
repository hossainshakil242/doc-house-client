import logo from '../../../assets/icons/logo.png'
const MiniCart = () => {
    return (
        <div className="text-white flex flex-col md:flex-row justify-center items-center gap-5 py-4">
            <div className="bg-[#07332F] py-5 px-8 flex rounded-lg">
                <img src={logo} className='w-6' alt="" />
                <div>
                <h4 className="text-2xl font-medium">Opening Hours</h4>
                <p className="text-sm">Open 9.00 am to 5.00pm <br />Everyday</p>
                </div>
            </div>
            <div className="bg-success py-5 px-8 rounded-lg">
                <img src={logo} className='w-6 float-left pr-1' alt="" />
                <div className='float-right'>
                <h4 className="text-2xl font-medium">Opening Hours</h4>
                <p className="text-sm">Open 9.00 am to 5.00pm <br />Everyday</p>
                </div>
            </div>
            <div className="bg-[#07332F] py-5 px-8 rounded-lg">
                <img src={logo} className='w-6 float-left pr-1' alt="" />
                <div className='float-right'>
                <h4 className="text-2xl font-medium">Opening Hours</h4>
                <p className="text-sm">Open 9.00 am to 5.00pm <br />Everyday</p>
                </div>
            </div>
        </div>
    );
};

export default MiniCart;