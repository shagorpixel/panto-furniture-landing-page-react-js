import banner from '../assets/banner.png'
const About = () => {
    return (
        <div>
           <div className=' bg-cover min-h-96 bg-center flex items-center justify-center' style={{ backgroundImage:`url(${banner})`}}>
             <h2 className=' text-white text-3xl md:text-4xl font-bold text-center'>Wellcome To About Page</h2>
            </div>
        </div>
    );
};

export default About;