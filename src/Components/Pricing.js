import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Pricing = () => {
  const cardPlans = [
    {
      price: "0",
      frequency: "/month",
      title: "Freemium",
      deskripsi: "For most businesses that want to optimize web queries",
      features: [
        "Free use of all nodes (5 times a day)",
        "Sample datas to get start with your first analysis",
        "Upload your own data for free under 1 MB",
      ],
      cta: "Choose plan",
    },
    {
      price: "50",
      frequency: "/month",
      title: "Analyst",
      deskripsi: "For most businesses that want to optimize web queries",
      features: [
        "Free use of all nodes",
        "There is sample data in Excel / CSV format so just run it",
        "You can upload using your own data, max capacity 30-50 Mb",
        "Can connect Database and Rest API",
      ],
      cta: "Choose plan",
    },
    {
      price: "100",
      frequency: "/month",
      title: "Scientist",
      deskripsi: "For most businesses that want to optimize web queries",
      features: [
        "Free use of all nodes",
        "There is sample data in Excel / CSV format so just run it",
        "You can upload using your own data until capacity 100 Mb",
        "Can connect Database (Spark, MongoDB, graphql) and Rest API",
      ],
      cta: "Choose plan",
    },
    {
      frequency: "-",
      title: "Enterprise",
      deskripsi: "For most businesses that want to optimize web queries",
      features: ["Custom Price", "Custom Access"],
      cta: "Contact Us",
    },
  ];

  return (
    <div
      className="Pricing-section-text-container "
      style={{ padding: "6rem" }}
    >
      <div style={{ fontSize: "3rem", textAlign: "center" }}>
        Choose your package and
        <span style={{ color: "blueviolet" }}> start Analyzing</span>
      </div>
      <div className="mx-auto grid max-w-7x1 grid grid-cols-4 gap-8 py-24 px-4 sm: px-6 lg:px-8">
        {cardPlans.map((data) => (
          <div
            key={data.title}
            className="relative rounded-2x1 border border-slate-200 p8 shadow-lg bg-white text-bold"
          >
            <div>
              <p>
                <span>{data.currency}</span>
                <span className="ml-3 text-4xl text-slate-900">
                  ${data.price}
                </span>
                <span className="ml-1.5">{data.frequency}</span>
              </p>
            </div>
            {data.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 rounded-full bg-cyan-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md">
                Most Popular
              </p>
            )}
            <p className="mt-8 ml-3 text-2xl leading-4 text-slate-700 text-violet-700">
              {data.title}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {data.deskripsi}
            </p>
            <div className="mt-6 space-y-4">
              {data.features.map((feature, index) => (
                <p
                  key={index}
                  className="text-sm text-slate-700 leading-6 flex"
                >
                  <svg
                    className="shrink-0 h-5 w-5"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.416016C4.47715 0.416016 0 4.89317 0 10.416C0 15.9389 4.47715 20.416 10 20.416C15.5228 20.416 20 15.9389 20 10.416C19.9936 4.89583 15.5202 0.422445 10 0.416016Z"
                      fill="#5243C2"
                      fillOpacity="0.103693"
                    />
                    <path
                      d="M15.7727 7.24933L10.0685 14.9902C9.93246 15.1707 9.7296 15.2889 9.50552 15.3184C9.28143 15.3478 9.0549 15.286 8.87683 15.1468L4.8035 11.8902C4.44405 11.6025 4.38585 11.0779 4.6735 10.7185C4.96115 10.359 5.48572 10.3008 5.84516 10.5885L9.24183 13.306L14.431 6.26349C14.6012 6.00815 14.8979 5.86698 15.2033 5.89603C15.5088 5.92507 15.7736 6.11964 15.8926 6.40247C16.0116 6.68531 15.9655 7.01065 15.7727 7.24933Z"
                      fill="#5243C2"
                    />
                  </svg>
                  {feature}
                </p>
              ))}
              <ul>
                <div className="text-center">
                  <a
                    href="#"
                    className={`shadow-md rounded-lg leading-4 text-sm font-semibold px-6 py-2 inline-block mt- bg-pink-300 text-pink-100 hover:bg-pink-400 ${
                      data.mostPopular
                        ? "text-white bg-cyan-600 hover:bg-cyan-600 shadow-md"
                        : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
                    }`}
                  >
                    {data.cta}
                  </a>
                </div>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: "2.5rem", textAlign: "center" }}>
        There will be a
        <span style={{ color: "blueviolet" }}> free trial demo</span> for use 5
        times a day with a maximum upload data limit of 1 Mb
      </div>
      <br /> <br />
      <div className="flex justify-center">
        <button className="secondary-button">
          Get a Demo <FiArrowRight />
        </button>
      </div>
      <br /> <br /> <br />
    </div>
  );
};

export default Pricing;
