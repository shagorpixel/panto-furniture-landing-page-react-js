import { useContext, } from 'react';
import { cardContext } from '../App';
import CardSingleproduct from './CardSingleproduct';

const CardContainer = () => {
   const [cardProducts] =  useContext(cardContext)

    const totalPrice = cardProducts.reduce((sum,currentValue)=>sum + currentValue.price,0)
  
    return (
         
            <div className='bg-gray-100'>
          
                <div className='section-container bg-white  '>
                {/* card Wrappper  */}
                        {cardProducts.length>0?
                          <div className=' relative overflow-scroll text-black'>
                            <div className=' sticky left-0 top-0 w-full rounded p-4 shadow-md mb-4'>
                              <h2 className=' text-2xl font-semibold'>Total Items: {cardProducts.length}</h2>
                              <h2 className=' text-xl text-gray-500 font-semibold mb-1'>Total Price :{totalPrice} </h2>
                              <button className=' bg-blue-800 text-white py-1 px-3 rounded cursor-pointer'>Check Out</button>
                            </div>
                            {
                            cardProducts.map(product=><CardSingleproduct
                             product={product}
                             key={product.id}
                              ></CardSingleproduct>
                            ) }</div>:
                              <h2 className=' rounded-2xl text-center text-2xl bg-gray-100 p-6 not-only-of-type: text-black'>No Card Product Avilable</h2>
                        }
                {/* card Wrapper End */}
                </div>
            </div>   
    );
};

export default CardContainer;