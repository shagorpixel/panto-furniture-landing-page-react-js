import { FaPlus } from "react-icons/fa";

import Rating from "./Rating";
import { useContext } from "react";
import { cardContext } from "../App";

const ProductCard = ({product}) => {
   const [cardProducts,cardHandle] =  useContext(cardContext)
    return (
        <div className=" rounded-2xl shadow-sm">
            <div className=" bg-[#fafafa] rounded-md ">
                <img src={product.imageUrl} alt="" />
                </div>
                <div className=" bg-white p-4">
                <span className=" text-sm text-gray-500">{product.category}</span>
                <h2 className=" text-xl font-semibold ">{product.name}</h2>
                <Rating rating={product.rating}></Rating>
                <div className=" flex justify-between items-center mt-7">
                    <div>
                        <sup className=" text-lg">$</sup>
                        <span className=" text-2xl font-bold">{product.price}</span>
                    </div>
                    <button onClick={()=>cardHandle(product)} className=" flex items-center justify-center size-12 cursor-pointer bg-black text-white rounded-full text-xl">
                    <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;