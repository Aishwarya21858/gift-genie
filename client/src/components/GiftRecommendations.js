import React from 'react';

const GiftRecommendations = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No recommendations available yet. Please fill out the questionnaire to get personalized gift suggestions.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Personalized Gift Recommendations</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">{recommendation.gift}</h3>
            <div className="mb-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                ${recommendation.price}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{recommendation.explanation}</p>
            {recommendation.link && (
              <a
                href={recommendation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Product →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftRecommendations; 