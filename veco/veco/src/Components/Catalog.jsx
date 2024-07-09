import React from 'react'
import '../styles/Catalog.scss'
import recycle from '../assets/tiles.png'
function Catalog() {
  return (
    <div>
      <div className="catalog">
        <div className="catalogwrapper">
            <div className="imgcatalog">

                <div className='center'>
                
                <div className="childcatalog">
                   
                   
                   <h3 className=''>Catalog</h3> 
                   <button className='catalogbtn'>+</button>
                </div>
                </div> 
                <img src={recycle} alt="" className='catimg' />

            </div>
            <div className="colour">
           
            </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
