import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Untitled from "../Assets/Untitled.svg";
import User from "../Assets/User.svg";
import studicase from "../Assets/studicase.svg";
import dataprocessed from "../Assets/dataprocessed.svg";

function CaseStudi() {
  const analisInfoData = [
    {
      image: User,
      title: "2,245,341",
      text: "Users",
    },
    {
      image: studicase,
      title: "828,867",
      text: "Study Case",
    },
    {
      image: dataprocessed,
      title: "46,328",
      text: "Data Processed",
    },
  ];

  return (
    <div className="CaseStudi-container">
      <div className="CaseStudi-banner-container">
        <div className="CaseStudi-image-container">
          <img src={Untitled} alt="" />
        </div>
        <div className="CaseStudi-text-section">
          <h3 className="primary-heading" style={{ fontSize: 30 }}>
            get to know <span style={{ color: "blueviolet" }}>Flowalitics</span>{" "}
            in easy use of{" "}
            <span style={{ color: "blueviolet" }}>Data Analysis</span>
          </h3>
          <p className="primary-text" style={{ fontSize: 20 }}>
            <strong>Flowalytics</strong> is a Saas (Software as a Service) for
            analyzing, modeling, predicting and forecasting data with zero code
            (block based) so there is no need to learn programming languages to
            process data. <strong>Flowalytics</strong> is our innovative
            solution designed to tackle this challenge head on by introducing a
            state of the art Low Code Data Analytics Tool.
          </p>
          <p className="primary-text-italic">
            keyword: Self Service Analytics, Low Code
          </p>
          <br />
          <br />
          <button className="secondary-button">Learn more</button>
          <br />
          <br />
        </div>
      </div>
      <div className="bg-gray-300 no-repeat work-section-top">
        <h3
          style={{ fontSize: "2.5rem", textAlign: "center", padding: "3rem" }}
        >
          helping your company
          <span style={{ color: "blueviolet" }}> to analyze data</span>
        </h3>
        <div className="grid grid-cols-3 gap-x-14">
          {analisInfoData.map((data) => (
            <div key={data.title} className="flex flex-row py-8 ">
              <img src={data.image} alt="" />
              <div>
                <h2 className="primary-subheading">{data.title}</h2>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default CaseStudi;
