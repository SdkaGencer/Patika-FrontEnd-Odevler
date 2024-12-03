
import "./classes.css";

import  { useState } from "react";

const Classes = () => {
  const [activeClass, setActiveClass] = useState("yoga");

  const classesData = [
    {
      id: "yoga",
      title: "Why are your Yoga?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae ipsum nostrum voluptatum molestiae non libero asperiores delectus consequuntur consequatur.",
      schedule: [
        "Saturday-Sunday: 8:00am-10:00am",
        "Monday-Tuesday: 10:00am-12:00pm",
        "Wednesday-Friday: 3:00pm-6:00pm",
      ],
      image: "images/yoga.jpg",
      alt: "Yoga",
    },
    {
      id: "group",
      title: "Why are your Group",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae ipsum nostrum voluptatum molestiae non libero asperiores delectus consequuntur consequatur.",
      schedule: [
        "Saturday-Sunday: 8:00am-10:00am",
        "Monday-Tuesday: 10:00am-12:00pm",
        "Wednesday-Friday: 3:00pm-6:00pm",
      ],
      image: "images/group.webp",
      alt: "Group",
    },
    {
      id: "solo",
      title: "Why are your Solo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae ipsum nostrum voluptatum molestiae non libero asperiores delectus consequuntur consequatur.",
      schedule: [
        "Saturday-Sunday: 8:00am-10:00am",
        "Monday-Tuesday: 10:00am-12:00pm",
        "Wednesday-Friday: 3:00pm-6:00pm",
      ],
      image: "images/solo.jpg",
      alt: "Solo",
    },
    {
      id: "streching",
      title: "Why are your Streching",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae ipsum nostrum voluptatum molestiae non libero asperiores delectus consequuntur consequatur.",
      schedule: [
        "Saturday-Sunday: 8:00am-10:00am",
        "Monday-Tuesday: 10:00am-12:00pm",
        "Wednesday-Friday: 3:00pm-6:00pm",
      ],
      image: "images/stret.webp",
      alt: "Streching",
    },
  ];

  return (
    <section id="classes">
      <div className="our-classes">
        <div className="our-classes-container">
          <h1 id="classes-title">OUR CLASSES</h1>
          <div className="underline"></div>
          <div className="btn-container">
            {classesData.map((cls) => (
              <button
                key={cls.id}
                className={`class-btn ${activeClass === cls.id ? "active" : ""}`}
                onClick={() => setActiveClass(cls.id)}
              >
                {cls.id.charAt(0).toUpperCase() + cls.id.slice(1)}
              </button>
            ))}
          </div>
          {classesData.map((cls) => (
            <div
              key={cls.id}
              id={cls.id}
              className={`class-info ${activeClass === cls.id ? "show" : "hide"}`}
            >
              <div className="info-text-container">
                <div className="info-text">
                  <h5>{cls.title}</h5>
                  <p>{cls.description}</p>
                </div>
                <div className="info-text">
                  <h5>When comes {cls.id.charAt(0).toUpperCase() + cls.id.slice(1)} Your Time</h5>
                  <ul className="classes-times">
                    {cls.schedule.map((time, index) => (
                      <li key={index}>{time}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="info-img-div">
                <img className="info-img" src={cls.image} alt={cls.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;

