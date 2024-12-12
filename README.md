# Weather-Journal App Project

## Overview

This project involves building an asynchronous web application that interacts with a Web API to gather and display weather data based on user input. The goal is to dynamically update the UI using both API data and user-generated content.

## Instructions

The project requires modifications to the following files:
- **server.js**: Backend server logic.
- **website/app.js**: Frontend application logic.

Use the provided **index.html** file for reference to DOM elements, and once the application functionality is complete, style the interface using **style.css**.

For those interested in testing as they develop, the **tests.js** file includes templates for basic code tests.

---

## Development Strategy

Follow this step-by-step guide to complete the project:

1. **Setup the Project Environment**  
   - Ensure that Node.js is installed.
   - Use the terminal to install the required npm packages:  
     ```bash
     npm install express body-parser cors
     ```
   - Create a `server.js` file and include the installed packages:
     ```javascript
     const express = require('express');
     const bodyParser = require('body-parser');
     const cors = require('cors');
     ```
   - Configure middleware for the server:
     ```javascript
     const app = express();
     app.use(bodyParser.urlencoded({ extended: false }));
     app.use(bodyParser.json());
     app.use(cors());
     app.use(express.static('website'));
     ```
   - Start the server on your chosen port (e.g., 3000) and test it:
     ```javascript
     const port = 3000;
     app.listen(port, () => {
       console.log(`Server running on localhost:${port}`);
     });
     ```

2. **Setup Routes**  
   - Create a `GET` route to retrieve data from the `projectData` object.
   - Add a `POST` route to store incoming data (`temperature`, `date`, `user response`) into `projectData`.

3. **Configure API**  
   - Obtain API credentials from the OpenWeatherMap website.
   - Define global variables in `app.js` for the API base URL and your API key:
     ```javascript
     const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
     const apiKey = 'your_api_key_here';
     ```

4. **Frontend Application Logic**  
   - Write an asynchronous `GET` function in `app.js` to fetch weather data using the OpenWeatherMap API.
   - Create an event listener for the `generate` button:
     - Retrieve the user’s input (zip code and response).
     - Fetch weather data using the `GET` function.
     - Chain a `POST` request to send the data (temperature, date, and response) to the server.

5. **Dynamic UI Update**  
   - Write another asynchronous function to retrieve data from the server.
   - Use DOM manipulation to dynamically update the following elements:
     - **Temperature**
     - **Date**
     - **User response**

---

## Testing

Testing your code as you develop is encouraged. Use the `tests.js` file to:
- Write basic test cases for server routes.
- Verify that API data is being fetched correctly.
- Check if the UI updates dynamically.

---

## Features

- Asynchronous communication with a weather API.
- Server-side data handling using Express.
- Dynamic user interface updates based on API and user input.

---

## How to Run the App

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
