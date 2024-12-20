Project
This project consists of a backend in Node.js and a frontend in React. The backend handles requests for country-related information, while the frontend displays this information to the user.

Backend
Setup
The backend runs on port 3001.

To set up and start the backend:

Navigate to the backend directory:

cd backend
Install the required dependencies:

npm install
After installation, start the server:

node server.js
The backend will be running at http://localhost:3001.

Routes
GET /api/countries: Get a list of all countries.

Example:
http://localhost:3001/api/countries

GET /api/country/UA?countryName=:countryName: Get detailed information about a specific country by its code and name.

Example:
http://localhost:3001/api/country/UA?countryName=Ukraine

Dependencies
The backend uses the following dependencies:

axios: HTTP client for making HTTP requests.
cors: Middleware for enabling cross-origin requests.
dotenv: To manage environment variables.
express: Web framework for handling HTTP routes and requests.
Frontend
Setup
The frontend runs on port 3000.

To set up and start the frontend:

Navigate to the frontend directory:

cd frontend/my-country-app
Install the required dependencies:


npm install
After installation, start the frontend:


npm start
The frontend will be running at http://localhost:3000.

Dependencies
The frontend uses the following dependencies:

react-bootstrap: For UI components like buttons, progress bars, etc.
axios: For making HTTP requests to the backend.
react-router-dom: For routing and navigation within the frontend.
#   l i s t O f C o u n t r i e s  
 