import React from "react";
import client1 from "../Assets/client1.svg";
import client2 from "../Assets/client2.svg";
import client3 from "../Assets/client3.png";
import client4 from "../Assets/client4.png";
import simple from "../Assets/simple.svg";
import selfservice from "../Assets/selfservice.svg";
import onweb from "../Assets/onweb.png";

const Client = () => {
  const workInfoData = [
    {
      image: simple,
      title: (
        <span style={{ color: "blueviolet" }}>"Simple and Less Code"</span>
      ),
      text: "Make it easier to process data because it does not require coding",
    },
    {
      image: selfservice,
      title: (
        <span style={{ color: "blueviolet" }}>"Self Service Analytics"</span>
      ),
      text: "Can create their own analytical models, allowing business users to perform their own daily analytical tasks without involving the IT team",
    },
    {
      image: onweb,
      title: <span style={{ color: "blueviolet" }}>"Online Web Based"</span>,
      text: "Can be accessed online, no installation required because it is web based",
    },
  ];

  return (
    <div>
      {/* Client Section */}
      <div className="client-section-text-container">
        <h3
          style={{ fontSize: "3rem", padding: "2.5rem", textAlign: "center" }}
        >
          Our Clients
        </h3>
        <p
          style={{ fontSize: "1.5rem", textAlign: "center", color: "GrayText" }}
        >
          We have been working with some extraordinary clients
        </p>
        <div className="flex justify-center items-center mt-8 p-1 gap-20">
          <img src={client1} alt="Client 1" className="h-12" />
          <img src={client2} alt="Client 2" className="h-12" />
          <img src={client3} alt="Client 3" className="h-12" />
          <img src={client4} alt="Client 4" className="h-12" />
        </div>
      </div>

      {/* Work Section */}
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h3
            style={{
              fontSize: "3rem",

              textAlign: "center",
            }}
          >
            Solve more of your data problems with less code, less time
          </h3>
          <p className="primary-text">What advantages do we offer?</p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div key={data.title} className="work-section-info">
              <img src={data.image} alt="" />
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
