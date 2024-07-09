
import '../styles/Product.scss';
import img from '../assets/bacteria2.png'
import skid from '../assets/skid.png'
import recycle from '../assets/recycle.png'
import acid from '../assets/acid.png'

function Products() {
  return (
    <div className='productflex'>
     <div className="flexcont">
      <img src={img} alt="" className='fleximg' />
        <p className='def'>The HDCP tiles come with anti- bacterial and anti-microbial properties i.e. the tiles are resistant to moss and mould spread even during rains giving them a long life.</p>
        <button className="flextext">Totally Anti Microbial</button>
     </div>
     <div className="flexcont cont1">
     <img src={skid} alt="" className='fleximg' />

     <p className='def'>The tiles are designed in such a way ranging from 0.50mm to 0.75mm that will provide protection and proper amount of friction for the grip.</p>

        <button className="flextext ">Anti Skidding</button>
     </div> <div className="flexcont">
     <img src={recycle} alt="" className='fleximg' />

     <p className='def'>The plastic is recyclable and can be segregated. Different tiles require different kinds of graded plastic minimizing pollution and damage contributing to the society.</p>

        <button className="flextext">Recyclable</button>
     </div> <div className="flexcont">
     <img src={acid} alt="" className='fleximg' />

     <p className='def'>The tiles are anti- corrosive and no deformation occurs making them resistant against strong acids. The chemical stability is therefore tested and approved.</p>


        <button className="flextext">Acid Proof</button>
     </div>
    </div>
  )
}

export default Products