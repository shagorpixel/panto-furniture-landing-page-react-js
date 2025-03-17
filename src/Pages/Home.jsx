import Experiance from "../components/Experiance";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Materials from "../components/Materials";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import WhyCoose from "../components/WhyCoose";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <WhyCoose></WhyCoose>
            <Products title="Best Selling Product"></Products>
            <Experiance></Experiance>
            <Materials></Materials>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;