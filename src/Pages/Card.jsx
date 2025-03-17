import { useContext, useState } from 'react';
import banner from '../assets/banner.png'
import { cardContext } from '../App';
import CardSingleproduct from '../components/CardSingleproduct';
import CardContainer from '../components/CardContainer';
const Card = () => {
   const [cardProducts] =  useContext(cardContext)
  
    return (
         <div >
            <div className=' bg-cover min-h-48 bg-center flex items-center justify-center' style={{ backgroundImage:`url(${banner})`}}>
            </div>
            {/* Card Container  */}
           <CardContainer></CardContainer>
            {/* Card Container  End */}
        </div>
    );
};

export default Card;