import "../styles/Contact.scss";
import Footer from "../Components/Footer";
import Map from "../Components/Map";
function Contact() {
  return (
    <div>
      <div className="contactfont">Contact</div>
      <div className="contactcont">
        <div className="detailcontact">
          <div className="address">
            Vsmart Technologies Pvt.Ltd.#72A, 1st Floor,'L' Block, 21st Street
            Anna Nagar East, Chennai - 600 102
          </div>
          <hr />
          <div className="phoneno">
            <div>+91 44-2626-2743</div>
            <div>+91 94449-71577</div>
            <div>+91 98412-21398</div>
            
          </div>
          <hr />
          <div className="emailskype">
            <div>info@vsmarttec.com</div>
            <div>vsmart.technologies</div>
          </div>
          <hr />
        </div>

        <div className="form">
          <div className="rightflex"></div>
          <form
            action="https://formsubmit.co/susindransarvesh@gmail.com"
            method="POST"
            className="contactform"
          >
            <label htmlFor="name">
              {" "}
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="inputs"
              />
            </label>

            <label htmlFor="email">
              {" "}
              <input
                type="email"
                placeholder="Your Email address"
                name="email"
                required
                className="inputs"
              />
            </label>

            <label htmlFor="phoneno">
              {" "}
              <input
                type="number"
                placeholder="Phone Number"
                name="phoneno"
                required
                className="inputs"
              />
            </label>

            <textarea
              name="msg"
              required
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
              className="textareamsg"
            ></textarea>
            <button type="submit" className="contactbtn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}

export default Contact;
