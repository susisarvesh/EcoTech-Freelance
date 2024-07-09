import React from 'react'
import '../styles/Hero.scss'
import gogreen from'../assets/gogreen.png'
import plastic from'../assets/plastic.png'
import bottle from'../assets/bottles.png'
import can from'../assets/cans.png'
function Hero() {
  document.addEventListener("mousemove",parallax)
  function parallax(e){
   document.querySelectorAll(".plasticc").forEach(function(move){
    var moving_value = move.getAttribute('data-value');
    var x = (e.clientX * moving_value)/100;
    var y = (e.clientY * moving_value)/100;
    move.style.transform ="translateX("+ x + "px) translateY("+ y + "px)" ;
   })
  }
  return (
    <>
    <div className="logosec"></div>
    <div className='section0'>
      <div className="container1">
        <div className="border">
        <h2 className='headertext'>Eco friendly solutions</h2>
        <h2 className='headertext'>for any Buisness</h2>
        </div>
    
      </div>
      <div className="container2">
        <div className='border1'>
         <p className="slogan1">We're dedicated to <span className='light'>eliminate plastic pollution</span> by transforming waste management practices </p>
         <p className='slogan'>and fostering a sustainable ecosystem.</p>
         </div>
      </div>
    </div>
    <div  className="gogreen">
      <img  className="gogreenimg" src={gogreen} alt="" />
      <img className ="plasticcover plasticc"src={plastic} alt="" data-value="-2" />
      <img className ="plasticbottle plasticc"src={bottle} alt=""data-value="-5" />
      <img className ="plasticcan plasticc"src={can} alt=""data-value="-3" />
    </div>
    
    
    </>
  )
}

export default Hero
