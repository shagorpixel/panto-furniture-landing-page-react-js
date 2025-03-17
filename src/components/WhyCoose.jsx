
import { Link } from "react-router-dom";
import InfoButton from "./InfoButton";

const WhyCoose = () => {
    return (
        <div className=" bg-white py-24">
            <div className=" section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
                <div>
                    <h2 className=" text-3xl md:text-[42px] text-secondary font-bold">Why
                    Choosing Us</h2>
                </div>
                <div className=' space-y-2'>
                    <h2 className=' text-2xl font-semibold'>Luxury facilities</h2>
                    <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <InfoButton text='More Info'></InfoButton>
                </div>
                <div className=' space-y-2'>
                    <h2 className=' text-2xl font-semibold'>Affordable Price</h2>
                    <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <InfoButton text='More Info'></InfoButton>
                </div>
                <div className=' space-y-2'>
                    <h2 className=' text-2xl font-semibold'>Many Choices</h2>
                    <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <InfoButton text='More Info'></InfoButton>
                </div>

            </div>
        </div>
    );
};

export default WhyCoose;