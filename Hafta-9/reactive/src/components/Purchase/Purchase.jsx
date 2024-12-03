import './purchase.css'

function Purchase() {
  return (
    <>
      <section id="purchase">
      <div className="purchase-container">
        <h1>PURCHASE FROM US</h1>
        <div className="underline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore harum libero vero mollitia laborum
          atque eius accusantium?
        </p>
        <div className="purchase-img-container">
          <div className="purchase-item">
            <img src="images/purchase1.jpg" alt="purchase1" />
            <h6>Kettlebell / 5kg</h6>
            <p>
              <s>89,99$</s> / 59,99$
            </p>
            <div className="add-chart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Add To Chart</p>
            </div>
          </div>
          <div className="purchase-item">
            <img src="images/purchase2.jpg" alt="purchase2" />
            <h6>Treadmill</h6>
            <p>
              <s>899,99$</s> / 599,99$
            </p>
            <div className="add-chart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Add To Chart</p>
            </div>
          </div>
          <div className="purchase-item">
            <img src="images/purchase3.jpg" alt="purchase3" />
            <h6>Adjustable Dumbbell</h6>
            <p>
              <s>89,99$</s> / 59,99$
            </p>
            <div className="add-chart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Add To Chart</p>
            </div>
          </div>
          <div className="purchase-item">
            <img src="images/purchase4.jpg" alt="purchase4" />
            <h6>Kettlebell / 3kg</h6>
            <p>
              <s>89,99$</s> / 59,99$
            </p>
            <div className="add-chart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Add To Chart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Purchase