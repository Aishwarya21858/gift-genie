import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 5001;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '..', '..', 'public');

// Middleware
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(publicPath));
console.log('Serving static files from:', publicPath);

// Function to generate gift recommendations using mock data
async function generateGiftRecommendations(formData) {
  return [
    {
      "gift": "Premium Yoga Mat Set",
      "price": "$45",
      "explanation": "Given their interest in fitness and wellness, this high-quality yoga mat set includes a non-slip mat, carrying strap, and yoga blocks. Perfect for both home and studio practice.",
      "link": "https://example.com/yoga-set"
    },
    {
      "gift": "Wireless Noise-Canceling Headphones",
      "price": "$120",
      "explanation": "These headphones are perfect for music lovers and commuters alike. They offer superior sound quality and comfort for extended listening sessions.",
      "link": "https://example.com/headphones"
    },
    {
      "gift": "Gourmet Coffee Subscription",
      "price": "$60",
      "explanation": "A 3-month subscription of premium coffee beans from around the world, perfect for coffee enthusiasts who enjoy trying new flavors.",
      "link": "https://example.com/coffee-sub"
    },
    {
      "gift": "Digital Art Tablet",
      "price": "$80",
      "explanation": "This drawing tablet is ideal for digital art and note-taking. It comes with a pressure-sensitive pen and software compatibility with major art programs.",
      "link": "https://example.com/art-tablet"
    },
    {
      "gift": "Adventure Experience Voucher",
      "price": "$150",
      "explanation": "This voucher can be used for various outdoor activities like rock climbing, kayaking, or hiking tours, perfect for adventure enthusiasts.",
      "link": "https://example.com/adventure"
    }
  ];
}

// Routes
app.post('/api/recommendations', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    const recommendations = await generateGiftRecommendations(req.body);
    console.log('Sending response');
    res.json({ recommendations });
  } catch (error) {
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ 
      error: 'Failed to get recommendations',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
