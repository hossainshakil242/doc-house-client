import Calendar from "react-calendar";
import chair from './../../../../assets/chair1.png';


const SecondBanner = () => {
    return (
        <div className="mx-auto max-w-7xl py-10">
            <div className="flex justify-center gap-10">
                <div className="">
                    <Calendar></Calendar>
                </div>
                <img src={chair} alt="" />
            </div>
        </div>
    );
};

export default SecondBanner;