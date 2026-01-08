Recipe App Backend

This is a backend application for managing recipes, built using Node.js, Express.js, MongoDB, EJS, and Tailwind CSS.
The project provides CRUD functionality for recipes and uses server-side rendering with EJS.

Overview

The Recipe App Backend allows users to create, view, update, and delete recipes.
It is designed following a clean MVC structure and is suitable for learning and demonstrating backend development concepts.

Features

Create new recipes

View all recipes

View a recipe by its ID

Update existing recipes

Delete recipes

Server-side rendering using EJS

Tailwind CSS integration

MongoDB database integration

Environment variable support using dotenv

Technology Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

View Engine: EJS

Styling: Tailwind CSS

Tools: Nodemon, Dotenv

Project Structure
Backend/
│── app.js
│── package.json
│── tailwind.config.js
│── .env
│
├── config/
│   └── DB.js
│
├── routes/
│   └── recipeRoutes.js
│
├── controllers/
│   └── recipeController.js
│
├── models/
│   └── recipeModel.js
│
├── pages/
│   ├── input.css
│   ├── RecipesHome.ejs
│   └── AddRecipe.ejs
│
├── public/
│   └── output.css

Environment Variables

Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URL=your_mongodb_connection_string

Installation and Setup
Step 1: Clone the repository
git clone https://github.com/HARSH-FOUJDAR/Backend.git
cd Backend

Step 2: Install dependencies
npm install

Step 3: Build Tailwind CSS
npm run build:css

Step 4: Start the server
npm start


The server will run on:

http://localhost:3000
