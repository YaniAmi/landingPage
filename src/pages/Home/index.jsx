import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Home from "../../Components/Home";
import Client from "../../Components/Client";
import CaseStudi from "../../Components/CaseStudi";
import Pricing from "../../Components/Pricing";
import MyFooter from "../../Components/MyFooter";
import { flowalytics } from "../../data";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Client />
      <CaseStudi />
      <div style={{ height: "100vh" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {flowalytics.map((item, index) => {
            const specialColorTitle = String(item.title || "")
              .split(" ")
              .slice(0, 7)
              .join(" ");
            const commonColorTitle = String(item.title || "")
              .split(" ")
              .slice(7, String(item.title || "").split(" ").length)
              .join(" ");
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      maxWidth: "40rem",
                      textWrap: "wrap",
                      padding: "2rem",
                    }}
                  >
                    <span style={{ color: "blueviolet" }}>
                      {specialColorTitle}
                    </span>{" "}
                    {commonColorTitle}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      flexDirection: index % 2 === 0 ? "row" : "row-reverse ",
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        key={index}
                        style={{ width: "26rem", objectFit: "contain" }}
                        src={item.image}
                      />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        paddingLeft: "6rem",
                        paddingRight: "6rem",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "left",
                          color: "GrayText",
                          fontSize: 16,
                        }}
                      >
                        {item.deskripsi}
                      </p>
                      <ul
                        style={{
                          listStyle: "disc",
                          textAlign: "left",
                          fontSize: "1rem",
                          padding: "1rem",
                          color: "GrayText",
                        }}
                      >
                        {(item.detail || []).map((_item, _index) => (
                          <li
                            key={`${index}-${_index}`}
                            style={{
                              padding: "0.5rem",
                              fontSize: 16,
                              margin: -8,
                            }}
                          >
                            {_item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Pricing />
      <MyFooter />
    </div>
  );
};

export default HomePage;
