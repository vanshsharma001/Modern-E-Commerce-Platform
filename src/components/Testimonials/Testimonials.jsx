import React from "react";
import Slider from "react-slick";

import imgt1 from "../../assets/testimonial/imgt1.jpg";
import imgt2 from "../../assets/testimonial/imgt2.jpg";
import imgt3 from "../../assets/testimonial/imgt3.jpg";
import imgt4 from "../../assets/testimonial/imgt4.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Ananya Mehta",
    text: "I’ve been shopping here for months and I’ve never been disappointed. The quality and delivery speed are top-notch!",
    img: imgt1,
  },
  {
    id: 2,
    name: "Rohit Khanna",
    text: "Stylish designs, premium fabric and really helpful support team. Definitely my go-to store now.",
    img: imgt2,
  },
  {
    id: 3,
    name: "Sakshi Verma",
    text: "My wardrobe has transformed thanks to this site. The offers are genuine and the products are worth every rupee.",
    img: imgt3,
  },
  {
    id: 4,
    name: "Aman Kapoor",
    text: "The user experience is so smooth and I love the subtle luxury touch on every product. Feels like a premium mall online.",
    img: imgt4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-white transition duration-300">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="text-[#d4af37] text-sm font-medium mb-1">
            What our customers are saying
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Testimonials
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Hear from our valued customers who experienced true satisfaction with our products.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-3">
              <div className="bg-gradient-to-br from-white via-[#fdf8ec] to-white rounded-2xl p-6 shadow-md relative h-full flex flex-col justify-between">
                <div className="flex flex-col items-center text-center gap-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-20 h-20 rounded-full border-4 border-[#d4af37] shadow-md"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    “{data.text}”
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {data.name}
                  </h4>
                </div>
                <div className="absolute top-4 right-6 text-[#d4af37] text-5xl font-serif opacity-20">
                  &ldquo;
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
