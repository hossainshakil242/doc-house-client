import { Helmet } from "react-helmet";
import Navbar from "../../shared/navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../banner/Banner";
import MiniCart from "../contact/miniCart";
import Expert from "../expert/Expert";
import Reviews from "../reviews/Reviews";
import Services from "../services/Services";


const Home = () => {
    return (
        <div className="space-y-4">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <Services></Services>
                <MiniCart></MiniCart>
                <Reviews></Reviews>
                <Expert></Expert>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;