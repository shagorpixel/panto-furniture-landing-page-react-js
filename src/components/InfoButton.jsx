import { Link } from 'react-router-dom';
import infoIcon from '../assets/button-icon.png'
const InfoButton = ({text}) => {
    return (
        <div>
            <Link>
                    <div className=' space-x-1'>
                    <span className=' text-primary'>{text}</span>
                    <img className=' inline' src={infoIcon} alt="" />
                    </div>
                    </Link>
        </div>
    );
};

export default InfoButton;