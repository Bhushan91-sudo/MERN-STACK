# Project Overview
# Objective: Create a blog platform where users can sign up, log in, create, edit, delete posts, and comment on posts.


Technologies:

# Frontend: React.js with Redux for state management, Axios for API calls.
# Backend: Node.js with Express.js.
# Database: MongoDB with Mongoose.
            Authentication: JWT (JSON Web Tokens) for securing routes.
            Additional Tools: bcrypt for password hashing, Multer for handling file uploads.

# Features
# User Authentication:

# Sign Up
# Login
# Logout
# Password Reset
# Blog Management:

# Create New Post
* Edit Existing Post
* Delete Post
* View All Posts
* View Single Post

# Comments:

* Add Comment to a Post
* Edit Comment
* Delete Comment
* Project Structure
* Backend

# Setup Project:

* Initialize Node.js project: npm init -y
* Install dependencies: npm install express mongoose bcryptjs jsonwebtoken cors dotenv multer body-parser.

# Environment Variables (.env):

            MONGO_URI=your_mongo_db_connection_string
            JWT_SECRET=your_jwt_secret_key

# Running the Project:

            Start the backend server: node server.js
            Start the frontend development server: npm start
