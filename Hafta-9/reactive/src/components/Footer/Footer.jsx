import './footer.css'

function Footer() {
  return (
    <>
      <footer>
      <div className="footer-container">
        <img src="images/logo.png" alt="Logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis vero provident mollitia. Repellendus,
          sapiente magnam aspernatur rem eos qui quaerat eveniet quos distinctio possimus dicta tempora debitis totam
          laborum.
        </p>
        <div className="links-container">
          <div className="links">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Helpful Links</h3>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Supports</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer