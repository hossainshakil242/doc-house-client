import { Helmet } from "react-helmet";
import Navbar from "../../shared/navbar/Navbar";
import 'react-calendar/dist/Calendar.css';
import Banners from "../../shared/Banner/Banners";
import SecondBanner from "./secondBanner/SecondBanner";
import MiniSevice from "../MiniService/MiniSevice";


const Appointment = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Appointment</title>
            </Helmet>
            <Navbar></Navbar>
            <Banners miniTitle={"Home/Appointment"} title={"Appointment"}></Banners>
            <SecondBanner></SecondBanner>
            <MiniSevice></MiniSevice>
            
        </div>
    );
};

export default Appointment;