import express from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'mercyclaicy001@gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Contact form endpoint
app.post('/api/contact', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your@email.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

// Portfolio projects endpoint
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['Vue.js', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics and management platform',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React', 'Express', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Healthcare App',
      description: 'Patient management system',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['Vue.js', 'FastAPI', 'MySQL']
    }
  ];

  res.json(projects);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});