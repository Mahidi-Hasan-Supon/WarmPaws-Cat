import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About WarmPaws-Cat
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 text-center leading-relaxed mb-10">
        WarmPaws-Cat is a caring platform dedicated to cats and cat lovers. Our
        mission is to provide a warm and safe home for helpless cats, support
        cat adoption, and help people understand proper cat care. We believe
        every cat deserves love. 🐱💛
      </p>

      {/* Mission Section */}
      <div className="bg-orange-50 p-6 rounded-xl mb-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our Mission
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Rescue and provide shelter for helpless cats.</li>
          <li>Spread awareness about cat adoption & care.</li>
          <li>Connect loving families with adoptable cats.</li>
          <li>Build a community of responsible pet owners.</li>
        </ul>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Our Team
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Member 1 */}
        <div className="p-6 border rounded-xl shadow-sm bg-white text-center">
          <h3 className="text-xl font-bold text-gray-800">
            Mahidi Hasan Supon
          </h3>
          <p className="text-sm text-gray-600 mt-1">Founder & Developer</p>
        </div>

        {/* Member 2 (optional) */}
        <div className="p-6 border rounded-xl shadow-sm bg-white text-center">
          <h3 className="text-xl font-bold text-gray-800">Team Member</h3>
          <p className="text-sm text-gray-600 mt-1">Co-Developer</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg">
          Email: <span className="font-medium">mahidihasansupon@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
