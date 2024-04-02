import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className='navbar'>
{/* Sidebar */}
<Sidebar/>
<div className='wrapper'>
    <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
    transition={{duration:0.5}} >Elshafey</motion.span>
    <div className="social">
        <a href="https://www.facebook.com/waleed.mohamed.56027281/"><img src="/facebook.png" alt="" /></a>
        <a href="https://www.instagram.com/waleed.elshaf3y/"><img src="/instagram.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/waleed-elshafey-575987298/"><img src="/linkedin.png" alt="" /></a>
        
    </div>
</div>
    </div>
  )
}

export default Navbar