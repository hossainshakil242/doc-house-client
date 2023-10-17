import Navbar from "../../shared/navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../banner/Banner";
import MiniCart from "../contact/miniCart";
import Expert from "../expert/Expert";
import Services from "../services/Services";


const Home = () => {
    return (
        <div className="space-y-4">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <Services></Services>
            <MiniCart></MiniCart>
            <Expert></Expert>
            <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;