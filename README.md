# Blog API Project

A secure, RESTful API for a blogging platform built with Node.js, Express, and MongoDB. This project implements user authentication, CRUD operations for posts, and one-to-many relationships between authors and their content.

## 1. Setup and Run Locally

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+ recommended)
* [MongoDB](https://www.mongodb.com/) (Local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

    ### Steps
    1. **Clone the repository:**
       ```bash
       git clone <your-repo-url>
       cd <your-project-folder>
    2. **Clone the repository:**
       ```bash
       npm install
       
    3. **Environment Variables:** 
       Create a .env file in the root directory and add the following:
        PORT=3000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_key
    4. **Clone the repository:**
       ```bash
       npm run dev
## 2. Implemented Endpoints
    Method   Endpoint                      Description                      Auth Required
    POST     /api/auth/register            Register a new user              No
    POST     /api/auth/login               Login and receive a JWT          No
    POST     /api/post/posts               Create a new blog post           Yes
    GET      /api/post/posts               Fetch all blog posts             No
    PUT      /api/post/posts/:id           Update a post (owner only)       Yes
    DELETE   /api/post/posts/:id           Delete a post (owner only)       Yes
       
