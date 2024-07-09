import  { useEffect, useState } from "react";
import '../styles/Navbar.scss';
import img from '../assets/vsimg.png'
import { Outlet ,Link} from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [state, setState] = useState('Menu');
   const [link,setlink] = useState(false);
   const closelink= ()=>{
    setlink(!link);
   }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setState((e)=>e  === 'Menu' ?'Close': 'Menu');
  };
  const [scrollDirection,setScrollDirection] = useState('scroll-up');
  const [lastScroll,setLastScroll] = useState(0);


  useEffect(()=>{
  const handleScroll =()=>{
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setScrollDirection('scroll-up');
    }

    if (currentScroll > lastScroll && scrollDirection !== 'scroll-down') {
      setScrollDirection('scroll-down');
    }

    if (currentScroll < lastScroll && scrollDirection === 'scroll-down') {
      setScrollDirection('scroll-up');
    }

    setLastScroll(currentScroll);
  }
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  }




  }
,[lastScroll,scrollDirection])

  
  


  return (<>
    <div className={`navbar ${scrollDirection}`}>
      <div className="nav-menu">
      <Link to='/' className="logo" ><img src={img} alt="" className="vsimage" /></Link>
        <div className="menu" onClick={toggleMenu}>
          <div className="mu">{state}</div>
        </div>
      </div>

      <div className={`items ${showMenu ? 'showmenu' : ''}`}>
      <Link to='/' className="item"  onClick={toggleMenu}>
         EcoHome
         </Link>
       
        
       
       <Link className="item" onClick={toggleMenu} to='/products'> Products & Usage</Link>  
       <Link to='/about' className="item"  onClick={toggleMenu}>About company</Link>
        
        <a href="" className="item">
         Clients 
        </a>
        <Link className="item" onClick={toggleMenu} to='/contact'> 
          Contacts
          </Link>  
      </div>

      <div className={`contact ${showMenu ? 'showmenu' : ''}`}>
        <button className="cbtn">Catalog</button>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Navbar;
