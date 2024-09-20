import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import './style.css'
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div class="glitch-wrapper">
          <div class="glitch" data-glitch="Ap">Ap</div>
        </div>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl cursor-pointer">
       <a href="https://www.linkedin.com/in/adityapippal/" target="_blank"> <FaLinkedin /></a>
       <a href="https://github.com/adityap5" target="_blank">  <FaGithub /></a>
       <a href="https://www.x.com/imaditya_29/" target="_blank"> <FaSquareXTwitter /></a>
       <a href="https://www.instagram.com/imaditya_29/" target="_blank">    <FaInstagram /></a>
       
        
     
      </div>
    </nav>
  )
}

export default Navbar
