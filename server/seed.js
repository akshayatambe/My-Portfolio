// Run this once to populate your database with your projects:
// node seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projects = [
  {
    title: 'Real-Time Currency Converter',
    description:
      'A responsive web application that converts currency values in real time using live exchange rate data from a public API. Features dynamic data fetching, error handling, and a clean, user-friendly interface for quick and accurate conversions between international currencies.',
    image: '',
    techStack: ['React.js', 'JavaScript', 'REST API', 'Git'],
    liveLink: '',
    githubLink: 'https://github.com/akshayatambe',
    featured: true,
  },
  {
    title: 'AI-Powered Mock Interview Platform',
    description:
      'An AI-driven platform that simulates technical and behavioral interview environments for students. It generates interview questions dynamically, supports voice interaction, and provides automated feedback to help users practice and improve their interview performance.',
    image: '',
    techStack: ['React.js', 'TypeScript', 'TailwindCSS', 'AI APIs'],
    liveLink: '',
    githubLink: 'https://github.com/akshayatambe',
    featured: true,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
