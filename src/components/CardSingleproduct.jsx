import { useContext } from "react";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import { CgOpenCollective } from "react-icons/cg";
import { cardContext } from "../App";

const CardSingleproduct = ({product}) => {
    const [cardProducts,cardHandle,setcardProducts,deleteCardHandle] = useContext(cardContext);
   
    return (
        <div className="  max-w-2xl mx-auto shadow-md p-4 rounded-md flex relative space-x-2 items-center border border-gray-100">
           <img className=" max-w-20" src={product.imageUrl} alt="" />
           <div>
            <h2 className=" text-xl font-semibold">{product.name}</h2>
            <span className=" text-sm text-gray-500">{product.category}</span>
            <Rating rating={product.rating}></Rating>
            <div>
            <span className=" text-sm text-gray-500">${product.price}</span>
            </div>
           </div>
        <div>
        <span onClick={()=>deleteCardHandle(product.id) } className=" text-2xl text-red-500 cursor-pointer absolute right-0 -translate-y-1/2">
        <MdDelete />
        </span>
        </div>
        </div>
    );
};

export default CardSingleproduct;