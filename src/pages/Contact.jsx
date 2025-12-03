import React from 'react';

const Contact = () => {
    return (
          <div className="max-w-4xl mx-auto px-4 py-40">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Have questions or want to reach out?  
        Fill out the form below and we’ll get back to you as soon as possible! 🐾
      </p>

      <div className="text-center">

        {/* Contact Details */}
        <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-2">
            📍 <strong>Location:</strong> Dhaka, Bangladesh
          </p>
          <p className="text-gray-700 mb-2">
            📧 <strong>Email:</strong> mahidihasansupon@gmail.com
          </p>
          <p className="text-gray-700 mb-2">
            📞 <strong>Phone:</strong> +880 1742169682
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Follow Us
          </h3>
          <ul className="text-gray-700 space-y-1">
            <li>🐾 Facebook: WarmPaws-Cat</li>
            <li>🐾 Instagram: @warmpaws_cat</li>
            <li>🐾 YouTube: WarmPaws Cat Care</li>
          </ul>
        </div>

        {/* Contact Form */}
        {/* <form className="bg-white border p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form> */}

      </div>
    </div>
    );
};

export default Contact;