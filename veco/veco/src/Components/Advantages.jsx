
import "../styles/Advantages.scss";
function Advantages() {
  const items = [
    {
      no: "1.1",
      slogan:
        "We offer seamless and hassle-free end-to-end solutions for industrial plastic waste management, from acceptance to recycling.",
    },
    {
      no: "1.2",
      slogan:
        "We safely dispose and recycle plastic waste, minimizing environmental hazards and contributing to Swachh Bharat Abhiyaan with eco-friendly techniques.",
    },
    {
      no: "1.3",
      slogan:
        "Elevate corporate social responsibility with our sustainable business solutions. From HDCP™ tiles to Eco Park Bench, we provide eco-friendly products that amplify CSR efforts and promote environmental awareness.",
    },
  ];
  

  return (
    <div>
      <hr className="hr" />
      <div className="adv">Advantages</div>
      <div className="advcont">
        {items.map((e) => {
          return (
            <div className="advitem">
              <hr className="hrs" />
              <div className="wrapperitem">
                <h3>{e.no}</h3>
                <p className="advname">{e.slogan}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="wrapperwhat">
        <p className="what">We prioritize eco-responsibility through advanced plastic composite tiles, striving for cost-effective architecture and a global transition to recycling and plastic-free environments.</p>
      </div>
    </div>
  );
}

export default Advantages;
