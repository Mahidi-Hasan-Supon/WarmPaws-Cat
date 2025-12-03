import React, { use } from "react";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Testominals = () => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
   <div className="max-w-6xl mx-auto px-4 py-14">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Testimonials
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Our adopters love their experience — here are some of their kind words.
      </p>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center">
              <img
                src={r.img}
                alt={r.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-orange-500"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 text-center mt-4">
              {r.name}
            </h3>

            <p className="text-gray-600 text-center mt-2 leading-relaxed">
              “{r.feedback}”
            </p>

            <div className="flex justify-center mt-4">
              <span className="text-yellow-500 text-lg">⭐ ⭐ ⭐ ⭐ ⭐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testominals;
