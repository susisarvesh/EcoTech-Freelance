import React from 'react'
import '../styles/Footer.scss'
function Footer() {
  return (
    <div className='footer'>
        <hr />
        <div className="footertop">
            <div className='footergreen'>Go green</div>
            <ul>
                <li>About Company</li>
                <li>Payment and Delivery</li>
                <li>Instructions</li>
                <li>info center</li>
                <li>Where to Buy</li>
            </ul>
            <div>Catalog</div>
        </div>
        <div className="mailcont">
        <div className="mail">
          <a href="mailto:vsmarteco@gmail.com" className='mailto'>
          vsmarteco@gmail.com
            </a>  
        </div>
        </div>
     <div className="socials">
     <div className='privacy'>Privacy Policy</div>
            <ul>
                
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                
            </ul>
            <div>Vsmarteco</div>
     </div>
<hr />
<div className="end">
Copyright © 2024 Vsmart Eco Pvt.Ltd.
</div>
    </div>
  )
}

export default Footer