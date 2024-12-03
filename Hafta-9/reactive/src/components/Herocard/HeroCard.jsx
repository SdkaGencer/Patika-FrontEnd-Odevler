import "./herocard.css";

function HeroCard() {
  return (
    <>
      <section id="home">
        {/* Hero Resmi ve Metin Bölgesi */}
        <div className="hero">
          <div className="hero-container">
            <p>POWERFULL</p>
            <h1>
              <span className="line-break">Group</span>
              <span className="line-break">Practice</span>
              <span className="line-break">With Trainer</span>
            </h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea saepe
              dolor provident voluptatibus illo ut quis quaerat voluptas
              explicabo! Doloribus delectus ipsum esse magni, dicta laborum nisi
              vel quas nihil repellat numquam tempora maxime aliquam porro
              culpa, nostrum at. Doloremque.
            </p>
            <div className="hero-btn">
              <button type="button">Sign Up</button>
              <button type="button">Details</button>
            </div>
          </div>
        </div>

        {/* Hero Alt Bilgiler */}
        <div className="hero-bottom-box-container">
          <div className="bottom-box">
            <h4>325</h4>
            <p>Course</p>
          </div>
          <div className="bottom-box">
            <h4>405</h4>
            <p>Work Out</p>
          </div>
          <div className="bottom-box">
            <h4>305</h4>
            <p>Working Hour</p>
          </div>
          <div className="bottom-box">
            <h4>705</h4>
            <p>Happy Client</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCard;
