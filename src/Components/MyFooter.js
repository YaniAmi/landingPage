import React from "react";
import Logoo from "../Assets/Logoo.svg";
import mappin from "../Assets/mappin.png";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsDribbble, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { Input } from "@material-tailwind/react";

const MyFooter = () => {
  return (
    <FlowbiteFooter container className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 ">
          <div className="space-y-12 mb-8 " style={{ paddingLeft: "6rem" }}>
            <FlowbiteFooter.Brand src={Logoo} alt="Flowbite Logo" />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Copyright © 2023 Flowalytics.</p>
                <p className="text-sm">All rights reserved</p>
                <div
                  className="flex space-x-6"
                  style={{ padding: "4rem", paddingLeft: "0rem" }}
                >
                  <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
                  <FlowbiteFooter.Icon href="#" icon={BsDribbble} />
                  <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
                  <FlowbiteFooter.Icon href="#" icon={BsYoutube} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <FlowbiteFooter.Title title="Company" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">About us</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Contact us</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Pricing</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Case Studies</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Testimonials</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Support" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">
                  Technical Support
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Help Center</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  Terms of service
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Legal</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  Privacy policy
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">
                  <a href="" className="flex items-center space-x-3">
                    <img src={mappin} alt="" className="w-10 inline-block" />
                    <span>
                      Cohive 101, Jl. DR. Ide Anak Agung Gde Agung, Kawasan Mega
                      Kuningan Jakarta Selatan, DKI Jakarta
                    </span>
                  </a>
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  <b>Stay up to date</b>
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
              <div className="flex items-center mt-4 color-white">
                <Input
                  label="Your email address"
                  icon={<FaPaperPlane />}
                  type="email"
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
      </div>
    </FlowbiteFooter>
  );
};

export default MyFooter;
