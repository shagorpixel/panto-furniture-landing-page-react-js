import banner from '../assets/banner.png'
import { FaSearch } from "react-icons/fa";
const HeroSection = () => {
    return (
        <section className=' font-primary pb-72 bg-cover bg-center pt-24 md:pt-44 text-white text-center relative ' style={{ backgroundImage: `url(${banner})`}}>
            <div className=' space-y-6'>
                <h2 className=' text-4xl md:text-6xl  md:w-4/6 mx-auto  leading-tight'>Make your interior more
                minimalistic & modern</h2>
                <p className=' text-2xl md:w-1/2 mx-auto drop-shadow-sm'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                <div className=' w-full mx-auto max-w-sm relative z-10'>
                    <input className=' w-full bg-white/30  py-3 px-4 rounded-full outline-none placeholder:text-gray-700 ' type="text" placeholder='Search furniture'/>
                    <div className=' h-10 w-10 flex items-center justify-center bg-primary rounded-full absolute right-2 top-1 text-lg cursor-pointe -mb-2'>
                    <FaSearch />
                    </div>
                </div>
            </div>
            {/* Bloor efect */}
            <div className=' h-3/4 absolute left-0 bottom-0 right-0  bg-gradient-to-t from-white via-transparent to-transparent blur-sm -mb-2'>
            </div>
            {/* Bloor Efect End */}
            {/* Hover Displaying Tooltip Box */}
            <div className=' absolute left-24 bottom-40 group '>
                <button className='  relative rounded-full p-3 bg-white/30 border broder-1  border-white cursor-pointer text-xl'>
                <div className='absolute bottom-full  -translate-x-1/2 mb-3 bg-white/25 py-1 px-2 rounded-lg hidden group-hover:flex items-center space-x-1 transition'>
                    <div className=' size-4 bg-red-700 rounded-full  border-1 border-white'></div>
                    <div className=' size-4 bg-green-700 rounded-full border-1 border-white'></div>
                    <div className=' size-4 bg-blue-700 rounded-full border-1 border-white'></div>
                </div>
                </button>
            </div>
            {/* Hover Displaying Tooltip Box End */}
        </section>
    );
};

export default HeroSection;