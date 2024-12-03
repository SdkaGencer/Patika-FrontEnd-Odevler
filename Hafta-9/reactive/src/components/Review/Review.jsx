import './review.css'

function Review() {
  return (
    <>
      <section id="review">
      <div className="review-container">
        <h1>REVIEW CLIENT</h1>
        <div className="underline"></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, minus!</p>
        <div className="review-items-container">
          <div className="review-item">
            <div className="client-container">
              <img src="images/client1.jpg" alt="Diet Expert" />
              <div className="people">
                <h6>Diet Expert</h6>
                <p>CFO</p>
              </div>
            </div>
            <div className="main-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus, ut ab perferendis modi
                omnis. Excepturi reprehenderit molestias dicta numquam error enim neque inventore nesciunt cumque optio.
                Accusamus error eum consectetur repudiandae saepe accusantium excepturi.
              </p>
            </div>
            <div className="triangles">
              <div className="triangle1"></div>
              <div className="triangle2"></div>
            </div>
          </div>
          <div className="review-item">
            <div className="client-container">
              <img src="images/client2.jpg" alt="Cardio Trainer" />
              <div className="people">
                <h6>Cardio Trainer</h6>
                <p>CEO</p>
              </div>
            </div>
            <div className="main-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus, ut ab perferendis modi
                omnis. Excepturi reprehenderit molestias dicta numquam error enim neque inventore nesciunt cumque optio.
                Accusamus error eum consectetur repudiandae saepe accusantium excepturi.
              </p>
            </div>
            <div className="triangles">
              <div className="triangle1"></div>
              <div className="triangle2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Review