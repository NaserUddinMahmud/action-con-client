import { Link } from 'react-router-dom';
import logo from '../../../assets/ActionCon.png'
import { FaPhoneAlt, FaRegEnvelope,FaStore, FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-200 text-base-content">
  <div>
  <img className="w-52 -ml-4" src={logo} alt="" />
    <p>ActionCon Ltd.<br/>Copyright © 2023 - All right reserved by ActionCon</p>
  </div> 
  
  <div>
    <span className="footer-title">Links</span> 
    <Link to={'/toys'} className="link link-hover">All Toys</Link> 
    <Link to={'/myToys'} className="link link-hover">My Toys</Link> 
    <Link to={'/addAToy'} className="link link-hover">Add A toy</Link> 
    <Link to={'/blogs'} className="link link-hover">Blogs</Link>
  </div> 
  <div>
    <span className="footer-title">CONTACT INFORMATION</span> 
    <p className='flex items-center'><FaStore></FaStore> {' '}ActionCon Store</p>
    <p>67 Boulevard London, Paris,
United States</p>
    <p className='flex items-center'><FaPhoneAlt></FaPhoneAlt> +1234567890</p>
    
    <p className='flex items-center'><FaRegEnvelope></FaRegEnvelope> mail@actioncon.Com</p>
  </div>
  <div>
    <span className="footer-title">Social Media</span> 
    
      <Link className='flex items-center link link-hover'><FaFacebookF></FaFacebookF>Facebook</Link> 
      <Link className='flex items-center link link-hover'><FaTwitter></FaTwitter>Twitter</Link> 
      <Link className='flex items-center link link-hover'><FaYoutube></FaYoutube>Youtube</Link> 
      <Link className='flex items-center link link-hover'><FaInstagram></FaInstagram>Instagram</Link> 
      
    
  </div>
</footer>
        </div>
    );
};

export default Footer;