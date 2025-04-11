import React, { useState } from 'react';
import axios from 'axios';
import Questionnaire from './components/Questionnaire';
import GiftRecommendations from './components/GiftRecommendations';

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Sending request with data:', formData);
      const response = await axios.post('/api/recommendations', formData);
      console.log('Received response:', response.data);
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      setError(error.response?.data?.error || 'Failed to get recommendations. Please try again.');
    }
    setLoading(false);
  };

  const handleReset = () => {
    setRecommendations(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Gift Genie 🎁</h1>
          <p className="text-xl text-indigo-100">AI-powered personalized gift recommendations</p>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            <p className="mt-4 text-white">Analyzing preferences...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-200 mb-4">{error}</p>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              Try Again
            </button>
          </div>
        ) : recommendations ? (
          <div>
            <GiftRecommendations recommendations={recommendations} />
            <div className="text-center mt-8">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              >
                Start Over
              </button>
            </div>
          </div>
        ) : (
          <Questionnaire onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;
