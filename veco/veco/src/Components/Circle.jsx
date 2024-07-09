import '../styles/Circle.scss';
import { Link } from 'react-router-dom';
function Circle() {
  return (<>
  
    <div className="circle">
     <div className="borderline">
        <div className='circleborder'>
           <h3 className='circleh3'>Security Solution</h3>
           <h3>Eco Products</h3>
        </div>
        </div>
        <div className='circlecont'>
             <h3 className='ccont'>Vsmart Technologies</h3>
             <p>VSMART is an innovative technology company focused on merging the physical and digital realms. We develop cutting-edge products and solutions to efficiently address clients' needs, backed by a committed team and strategic global alliances. Our key strengths include outstanding service, deep industry knowledge, and a robust infrastructure for seamless operations</p>
             <Link className='vslink' to='https://vsmarttec.com/'>Vsmart Technologies</Link>
        </div>
        
    </div>
    </>
  )
}

export default Circle