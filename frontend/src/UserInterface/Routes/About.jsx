import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-green-700">About Virtual Herbal Garden Ayush</h1>
          <p className="mt-4 text-xl text-[#50B250]">
            Discover the world of natural healing through our virtual herbal garden.
          </p>
        </div>

        <div className="grid  md:grid-cols-2 gap-10">
          <div className="bg-[#50B250] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-white">
              At Virtual Herbal Garden Ayush, our mission is to connect people with nature's healing power. We provide
              an interactive and educational platform that allows you to explore various herbs, their benefits, and how
              they contribute to overall well-being. We believe in the power of nature to bring balance and healing to
              your body and mind.
            </p>
          </div>

          <div className="bg-[#50B250] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            <p className="mt-4 text-white">
              Our vision is to create an inclusive space where anyone, from beginners to herbal enthusiasts, can learn
              about the medicinal uses of herbs and how to incorporate them into everyday life. We aim to spread
              awareness about sustainable, herbal practices that benefit both individuals and the environment.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-green-700">Join Us in the Journey</h3>
          <p className="mt-4 text-lg text-[#50B250]">
            Explore, learn, and grow with our virtual herbal garden. Start your wellness journey today and embrace the
            natural way of healing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
