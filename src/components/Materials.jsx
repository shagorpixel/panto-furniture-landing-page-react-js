import React from 'react';
import material1 from '../assets/material1.png'
import material2 from '../assets/material2.png'
import material3 from '../assets/material3.png'
const Materials = () => {
    return (
         <div className='container mx-auto pt-10 pb-14 flex flex-col items-center justify-between md:flex-row md:space-x-20 px-3 md:px-0'>
                    <div className=' max-w-lg  space-y-3 mb-10 md:mb-0'>
                        <h4 className=' text-primary font-semibold'>Materials</h4>
                        <h2 className=' text-3xl md:text-4xl font-semibold'>Very serious materials for making furniture</h2>
                        <p className=' text-gray-500'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 items-center md:items-end justify-center'>
                        <div className=' col-span-1'>
                            <img src={material1} alt="" />
                            <img src={material2} alt="" /> 
                        </div>
                        <div className=' col-span-1 md:col-span-2'>
                            <img className=' row-span-2 col-span-2' src={material3} alt="" /> 
                        </div>
                    </div>
        </div>
    );
};

export default Materials;