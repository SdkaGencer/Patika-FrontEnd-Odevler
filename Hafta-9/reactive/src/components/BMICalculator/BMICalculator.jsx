import { useState } from "react";
import './bmi-calculator.css'

function BMICalculator() {
  const [height, setHeight] = useState(""); // Boy (cm)
  const [weight, setWeight] = useState(""); // Kilo (kg)
  const [bmiResult, setBmiResult] = useState(""); // Hesaplanan BMI sonucu
  const [bmiCategory, setBmiCategory] = useState(""); // BMI kategorisi

  // BMI Hesaplama Fonksiyonu
  const calculateBMI = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engelle
    if (!height || !weight) {
      alert("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const heightInMeters = height / 100; // cm'yi metreye çevir
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI hesapla
    setBmiResult(bmi);

    // BMI Kategorisini Belirle
    if (bmi < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiCategory("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obese");
    }
  };

  return (
    <section className="bmi-container">
      <div className="bmi-text">
        <h3>BMI Calculator</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia soluta
          libero perferendis repudiandae repellat? Corrupti quo adipisci nobis
          harum architecto?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt minima,
          corporis iste ratione, eaque reiciendis, odit vel voluptate quidem
          amet rerum mollitia. Nemo, qui nihil?
        </p>

        <div className="bmi-calculator">
          <form id="bmi-form" onSubmit={calculateBMI}>
            <input
              type="number"
              id="height"
              placeholder="Your height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <input
              type="number"
              id="weight"
              placeholder="Your weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <button type="submit" className="class-btn">
              Calculate BMI
            </button>
          </form>
        </div>

        {/* Sonuç Gösterimi */}
        {bmiResult && (
          <div className="bmi-result">
            <p>Your BMI: <strong>{bmiResult}</strong></p>
            <p>Category: <strong>{bmiCategory}</strong></p>
          </div>
        )}
      </div>

      <div className="image-container">
        <img src="images/bmi-index.jpg" alt="BMI" className="target-image" />
        <div className="arrow-up"></div> {/* Hareket eden ok işareti */}
      </div>
    </section>
  );
}

export default BMICalculator;
