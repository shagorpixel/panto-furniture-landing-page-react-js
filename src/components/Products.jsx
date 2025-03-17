import { useState } from "react";
import { products } from "../utilities/Products";
import ProductCard from "./ProductCard";
import InfoButton from "./InfoButton";

const categories = ['Chair','Beds','Sofa','Lamp'];

const Products = ({title}) => {
    const [selectedCategory,setSelectedCategory] = useState('Chair')
    const [sliceNumber, setSliceNumber] = useState(4)
    const myFilterProduct =  products.filter(product=>product.category == selectedCategory)
    const sliceHandle = ()=>{
        setSliceNumber(prev=>prev + 4);
    }

    return (
        <div className=" bg-[#F7F7F7] py-18 ">
            <div className="section-container">
                <h2 className=" text-center text-4xl font-bold mb-6">{title}</h2>
                {/* Category Navigation */}
                <div className=" max-w-96 sm:rounded-full bg-[#EEEEEE] p-1 mx-auto mb-12">
                    <ul className=" flex flex-col sm:flex-row justify-center items-center sm:justify-between space-y-2 sm:space-y-0">
                        {
                            categories.map(category=>(
                                    <li key={category} className=" w-full" > <button 
                                    onClick={()=>setSelectedCategory(prevCatetegory=>category)} className={`w-full py-1.5 px-7 rounded-full hover:bg-primary transition cursor-pointer font-semibold ${
                                        selectedCategory== category ? 'bg-white' : ''
                                    }`}>{category}</button></li>
                            ))
                        }
                        
                    </ul>
                </div>
                {/* Category Navigation End */}

                {/* Product Wrapper */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        myFilterProduct.slice(0,sliceNumber).map(product=><ProductCard key={product.id} product={product}></ProductCard>)
                    }    
                </div>
                {/* Product Wrapper End */}
                {
                    sliceNumber<myFilterProduct.length && (<div className=" text-center mt-5">
                    <button  onClick={sliceHandle}>
                    <InfoButton text="Load More.."></InfoButton>
                    </button>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default Products;