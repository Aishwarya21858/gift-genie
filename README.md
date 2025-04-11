# Gift Genie 🎁

An AI-powered gift recommendation system that provides personalized gift suggestions based on recipient's preferences, interests, and occasion.

## Features

- Interactive questionnaire to collect recipient information
- AI-powered gift recommendations using ChatGPT
- Detailed explanations for each recommendation
- Modern and responsive UI
- Real-time recommendations

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express
- AI: OpenAI GPT-4
- API: RESTful API

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gift-genie.git
cd gift-genie
```

2. Install dependencies:
```bash
npm run install-all
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=5001
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5001`

## Project Structure

```
gift-genie/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js         # Main application component
│   │   └── index.js       # Entry point
├── server/                 # Node.js backend
│   ├── src/
│   │   └── index.js       # Server entry point
├── public/                 # Static files
├── .env                    # Environment variables
└── package.json            # Project configuration
```

## API Endpoints

- `POST /api/recommendations`
  - Request body: JSON object containing recipient information
  - Response: JSON array of gift recommendations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT-4 API
- React and Node.js communities for their amazing tools and libraries
