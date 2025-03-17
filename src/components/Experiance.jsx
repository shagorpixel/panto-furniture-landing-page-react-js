import expricences from '../assets/expricences.png'
const Experiance = () => {
    return (
        <div className='container mx-auto pt-28 pb-10 flex flex-col items-center justify-between md:flex-row md:space-x-20 px-3 md:px-0'>
            <div className=' '>
                <img src={expricences} alt="" />
            </div>
            <div className=' max-w-[600px]  space-y-3'>
                <h4 className=' text-primary font-semibold'>experiences</h4>
                <h2 className=' text-3xl md:text-4xl font-semibold'>we provide you the best experience</h2>
                <p className=' text-gray-500'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            </div>
        </div>
    );
};

export default Experiance;