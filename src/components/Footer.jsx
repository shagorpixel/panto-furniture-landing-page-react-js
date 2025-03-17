import React from 'react';
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' bg-secondary-bg py-12'>
            <div className=' section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
                <div className=' md:col-span-2'>
                    <h2 className=' text-2xl font-black'>Panto</h2>
                    <p className=' max-w-sm text-gray-600'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                <div>
                    <h2 className=' text-primary font-semibold text-lg mb-2'>Services</h2>
                    <ul className=' space-y-2 text-gray-500'>
                        <li><Link to='/'>Email Marketing</Link></li>
                        <li><Link to='/'>Campaigns</Link></li>
                        <li><Link to='/'>Branding</Link></li>
                       
                    </ul>
                </div>
                <div>
                    <h2 className=' text-primary font-semibold text-lg mb-2'>Furniture</h2>
                    <ul className=' space-y-2 text-gray-500'>
                        <li><Link to='/'>Beds</Link></li>
                        <li><Link to='/'>Chair</Link></li>
                        <li><Link to='/'>All</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className=' text-primary font-semibold text-lg mb-2'>Follow Us</h2>
                    <ul className=' space-y-2 text-gray-500'>
                        <li><Link to='/'><div className=' flex items-center'><span className=' mr-1 text-black'><FaFacebookF /></span> Facebook</div></Link></li>
                        <li><Link to='/'><div className=' flex items-center'><span className=' mr-1 text-black'><FaTwitter /></span> Twitter</div></Link></li>
                        <li><Link to='/'><div className=' flex items-center'><span className=' mr-1 text-black'><FaInstagram /></span> Facebook</div></Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className=' section-container flex justify-between text-gray-500 mt-4'>
                <div>
                    <p>Copyright © { new Date().getFullYear()}</p>
                </div>
                <div className=' space-x-4 '>
                    <Link to={'/'}>Terms & Conditions</Link>
                    <Link to={'/'}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;