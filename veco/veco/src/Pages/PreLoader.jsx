import React, { useEffect } from 'react'
import '../styles/Preloader.scss'
import {preLoaderAnim} from '../animations/index'
function PreLoader() {
    useEffect(()=>{
        preLoaderAnim();
    },[])

  
  return (
    <div className='preloader'>
        <div className="loader">
            <div className="progress">
                <div className="bar">
                    <div className="barconfirm">0%</div>
                    <div className="percent"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreLoader