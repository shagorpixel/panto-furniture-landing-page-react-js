import { Outlet } from "react-router-dom";
import Navber from "./components/Navber";
import {products} from './utilities/products';
import { createContext, useState } from "react";
 export const cardContext = createContext()
const App = () => {

  const [cardProducts,setcardProducts] = useState([]);

  const cardHandle = (product)=>{
    setcardProducts(prevCardProducts=>[...prevCardProducts,product])
  }

 const deleteCardHandle = (id)=>{
  const filterProduct = cardProducts.filter(product=>product.id != id)
  setcardProducts(filterProduct)
}
  return (
    <div className=" font-primary">
      <cardContext.Provider value={[cardProducts,cardHandle,setcardProducts,deleteCardHandle]}>
      <Navber></Navber>
      <Outlet></Outlet>
      </cardContext.Provider>
    </div>
  );
};

export default App;