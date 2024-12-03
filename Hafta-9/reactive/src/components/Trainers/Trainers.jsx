
import "./trainers.css";


function Trainers() {
  return (
    <>
      <section id="trainers">
      <div className="trainers-container">
        <h1>OUR BEST TRAINERS</h1>
        <div className="underline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          accusamus cum cupiditate incidunt ecing elit. Fuga, possimus.
        </p>
        <div className="img-container">
          <div className="img-div">
            <img src="images/trainer1.jpg" alt="trainer1" />
            <div className="img-content">
              <h4>Elena John</h4>
              <p>Yoga Trainer</p>
            </div>
          </div>
          <div className="img-div">
            <img src="images/trainer2.jpg" alt="trainer2" />
            <div className="img-content">
              <h4>Liam Kovacs</h4>
              <p>Cardio Trainer</p>
            </div>
          </div>
          <div className="img-div">
            <img src="images/trainer3.jpg" alt="trainer3" />
            <div className="img-content">
              <h4>Sofia Garcia</h4>
              <p>Pilates Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Trainers