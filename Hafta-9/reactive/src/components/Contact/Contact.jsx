import './contact.css'

function Contact() {
  return (
    <>
      <section id="contact">
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <div className="underline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Vitae, placeat soluta
          ratione mollitia animi aliquam.
        </p>
        <div className="form-map-container">
          <div className="form-part">
            <div className="paragraphs">
              <div className="paragraph1">
                <p>Mobile Number</p>
                <p>+1583654574</p>
              </div>
              <div className="paragraph2">
                <p>Email Address</p>
                <p>demo@demo.com</p>
              </div>
            </div>
            <h3>Make An Appointment</h3>
            <form className="form-container" action="#" method="POST">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <textarea id="message" name="message" rows="7" placeholder="Your Message" required></textarea>
            </form>
          </div>

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44230.52161308872!2d-60.22046219824694!3d46.14262904957294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b67fb367e723415%3A0xa783539b7b308087!2sSydney%2C%20NS%2C%20Canada!5e0!3m2!1sen!2str!4v1728149828363!5m2!1sen!2str"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact