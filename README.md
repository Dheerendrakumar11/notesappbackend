# Notes App Backend

This is the backend for the Notes App, developed using **Node.js** and **Express.js**. It provides the API to manage user notes, including features like creating, updating, deleting, and retrieving notes.

## Features
- User Authentication (Login/Signup)
- CRUD Operations for Notes (Create, Read, Update, Delete)
- Middleware for validation and error handling
- CORS setup for handling cross-origin requests
- Environment configuration via `.env` file

## Technologies Used
- **Node.js** - JavaScript runtime for building the server-side application.
- **Express.js** - Web framework for building RESTful APIs.
- **MongoDB** - NoSQL database for storing user data and notes.
- **Mongoose** - ODM for MongoDB to interact with the database.
- **JWT** - For token-based authentication.
- **CORS** - For handling cross-origin requests.

## Setup and Installation

### Prerequisites:
- Node.js and npm should be installed on your machine.
- A MongoDB instance (local or remote) should be set up.

### Steps to Run:

1. Clone the repository:
   ```bash
   git clone https://github.com/Dheerendrakumar11/notesappbackend.git

## Install the required dependencies:

-cd notesappbackend
-npm install

## create .env file

MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=your_jwt_secret_key
PORT=5000

#Start the server:

npm start
