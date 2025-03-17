import banner from '../assets/banner.png'
import Products from '../components/Products';
const Shop = () => {
    return (<div>
        <div className=' bg-cover min-h-96 bg-center flex items-center justify-center' style={{ backgroundImage:`url(${banner})`}}>
           <h2 className=' text-white text-3xl md:text-4xl font-bold text-center'>Wellcome To Shop Page</h2>
        </div>
        <Products title ='Our Product List'></Products>
        </div>
    );
};

export default Shop;