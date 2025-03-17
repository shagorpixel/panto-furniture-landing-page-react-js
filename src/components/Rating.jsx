import { IoIosStarOutline,IoIosStar } from "react-icons/io";

const Rating = ({rating}) => {
    return (<div className=" flex space-x-1 mx-auto items-center">
        <div className=" flex items-center space-x-1">
        {
            Array.from({length:5},(d,i)=>{
                const newIndex = i + 1;
                return newIndex<= rating?<IoIosStar key={newIndex} className=" text-primary" /> : <IoIosStarOutline key={newIndex} className=" text-gray-400" />
            })
        }
        </div>
        <small className=" text-gray-500">({rating})</small>
    </div>);
};

export default Rating;