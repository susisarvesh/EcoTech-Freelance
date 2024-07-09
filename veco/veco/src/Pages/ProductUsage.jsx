import Products from "../Components/Products";
import Footer from "../Components/Footer";
import "../styles/ProductUsage.scss";
import { FaRegSquareFull } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import tile1 from "../assets/Products/tile1.jpg";
import tile2 from "../assets/Products/tile2.jpg";
import bins from "../assets/Products/dustbins.jpeg";
import bins1 from "../assets/Products/bins2.jpeg";
import tree1 from "../assets/Products/tree1.jpg";
import tree2 from "../assets/Products/tree2.jpeg";
import bench1 from "../assets/Products/bench.png";
import bench2 from "../assets/Products/bench1.png";
import table1 from "../assets/Products/table1.jpeg";
import table2 from "../assets/Products/table2.png";
import { GiWoodenChair } from "react-icons/gi";
import { GiParkBench } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import productimg from '../assets/prductimg.png'
function ProductUsage() {
  return (
    <>
      <div className="mainproduct">
        <title>Product</title>
        
        <img src={productimg} className="productimg" alt="" />
        <header className="pheader">
          <h1 className="producttitle">
            Environment-friendly Business Solutions
          </h1>
        </header>
        <div className="productusagecont">
          <div className="left">
            <div className="firstproduct">
              <FaRegSquareFull className="mricon" />
              High Density Composite Polymer (HDCP™) Tiles
            </div>
            <div className="firstproduct">
              <FaRegTrashCan className="mricon" />
              GreenCycle Bins: Transforming Sustainable Waste
            </div>

            <div className="firstproduct">
              <GiPalmTree className="mricon" />
              Eco-Tree Guard (HDCP™) Preserving Nature
            </div>

            <div className="firstproduct">
              <GiParkBench className="mricon" />
               Eco-Bench (HDCP™) Comfort Meets Sustainability
            </div>

            <div className="firstproduct">
              <GiWoodenChair className="mricon" />
              Coffee Table (HDCP™) Your Coffee Companion
            </div>
          </div>
          <div className="right">
            <div className="rightcont">
              <h3 className="rightheading">High Density Composite Polymer (HDCP™) Tiles</h3>
              <div className="rcont">
                
                <Carousel className="corousel">
                  <div>
                    <img src={tile1} />
                  </div>
                  <div>
                    <img src={tile2} />
                  </div>
                </Carousel>
              </div>
              <div className="rtext">
              <p>
                  <span className="textbold">Size</span>-7*6inch{" "}
                </p>
              
                <p>
                  <span className="textbold">Thickness</span>-22mm
                </p>
               
                <p>
                  <span className="textbold"> 1sq.mt.</span> = 45 tiles{" "}
                </p>
                <p>
                  <span className="textbold">Shape</span>- Dumbbell shape{" "}
                </p>
               
                <p>
                  <span className="textbold">Load Bearing Capacity</span> - upto
                  20 tonnes
                </p>
              </div>
            </div>
            <div className="rightcont">
            <h3 className="rightheading">GreenCycle Bins</h3>
              <div className="rcont">
                <Carousel className="corousel">
                  <div>
                    <img src={bins} />
                  </div>
                  <div>
                    <img src={bins1} />
                  </div>
                </Carousel>
              </div>
              <div className="rtext">
             
              
                <p>
                  <span className="textbold">Thickness</span>-8mm
                </p>
               
                <p>
                  <span className="textbold">Front</span>- C Shape{" "}
                </p>
                <p>
                  <span className="textbold">Dimensions</span>-  3ft*1.5*1.5ft{" "}
                </p>
               
                
                <p>
                  <span className="textbold">Upper End lid</span> for waste collection.
                </p>
                <p>
                  <span className="textbold">Material</span>-Post Consumer Plastic Waste{" "}
                </p>
                <p>
                  <span className="textbold">Back side door</span> to throw or put waste
                </p>
              </div>
            </div>
            <div className="rightcont">
            <h3 className="rightheading">Eco-Tree Guard</h3>
              <div className="rcont">
                <Carousel className="corousel">
                  <div>
                    <img src={tree2} />
                  </div>
                  <div>
                    <img src={tree1} />
                  </div>
                </Carousel>
              </div>
              <div className="rtext">
              
               
                <p>
                  <span className="textbold"> Shape </span>-Circular , Square{" "}
                </p>
             
               
                <p>
                  <span className="textbold">Sturdy </span> & Tough Material
                </p>
                <p>
                  <span className="textbold">Dimensions</span>- 4ft (ht) x 2ft (diameter)
                </p>
                <p>
                  <span className="textbold">Material</span>-Post Consumer Plastic Waste{" "}
                </p>
              
            
                <p>
                  <span className="textbold">4 circular lumbers</span>- 2ft diameter 15 
lumbers support. {" "}
                </p>
              </div>
            </div>
            <div className="rightcont">
            <h3 className="rightheading">Eco-Bench </h3>
              <div className="rcont">
                <Carousel className="corousel">
                  <div>
                    <img src={bench1} />
                  </div>
                  <div>
                    <img src={bench2} />
                  </div>
                </Carousel>
              </div>
              <div className="rtext">
             
              
             <p>
               <span className="textbold">Thickness</span>-18mm
             </p>
            
             <p>
               <span className="textbold"> Footrest</span> - Yes {" "}
             </p>
             <p>
               <span className="textbold">Resistant</span>& Termite Proof{" "}
             </p>
            
             <p>
               <span className="textbold">Weight</span> - 65 kg (approx.)
             </p>
             <p>
               <span className="textbold">Material</span>-Post Consumer Plastic Waste{" "}
             </p>
             <p>
               <span className="textbold">Seating Capacity</span> - 3 persons at a time 
(250 kgs)
             </p>
           </div>
            </div>
            <div className="rightcont">
            <h3 className="rightheading"> Coffee Table Set </h3>

              <div className="rcont">
                <Carousel className="corousel">
                  <div>
                    <img src={table1} />
                  </div>
                  <div>
                    <img src={table2} />
                  </div>
                </Carousel>
              </div>
              <div className="rtext">
             
              
             
            
             
             <p>
               <span className="textbold">Tabletop</span>- 8mm{" "}
             </p>
             <p>
               <span className="textbold">Thickness</span>-18mm
             </p>
             <p>
               <span className="textbold">Sturdy &</span>  Tough Material. 

             </p>
             <p>
               <span className="textbold">Weight</span> - 65 kg (approx.)
             </p>
             <p>
               <span className="textbold">Material</span>-Post Consumer Plastic Waste{" "}
             </p>
             <p>
               <span className="textbold">Seating Capacity</span> - 4 Chairs And 1 table.

             </p>
             
             <p>
               <span className="textbold">Dimensions</span>- 1.5*1.8*3 ft (Chair) , 2.5*1.5*1.5 ft (Table){" "}
             </p>
           </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
}

export default ProductUsage;
