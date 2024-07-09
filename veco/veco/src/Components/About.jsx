
import '../styles/About.scss';
import Advantages from '../Components/Advantages'
import Footer from '../Components/Footer'
import Circle from './Circle';
function About() {
  return (
<>
    <div className='about'>
      <div className="abtcont">
      
        <div className="abtpara">
           <div className='apara1'>
          <p className='abttxt'>
           VsmartEco is a Eco friendly company that does transforms plastic waste into high performance  materials
          </p >
         
          
          
          </div>
          <p className='dabttxt'>
          Our product range, known for durability, weather resistance, and recyclability, provides sustainable alternatives to conventional materials.
          </p>
          
        </div>

      </div>
    </div>
    <Advantages />
    <hr />
    <div className='abtmiss'>
    <div className='vision'>
      <h2>Vision</h2>
      <p>To reduce the chronic effects of plastic bags in India and build plastic free cities and towns with durable and quantitative infrastructure further offering a long-term resolution to unavailability of basic amenities like toilets in rural areas specifically.</p>
    </div>
    <div className='mission'>
      <h2>Mission</h2>
      <p>Our mission is to provide plastic pollution solution by eliminating waste plastic menace from the ecosystem, we strive to improvise the current established scenario of waste management.</p>
    </div>
    
    </div>
    <hr />
    <Circle />
    <Footer />
    </>
  )
}

export default About