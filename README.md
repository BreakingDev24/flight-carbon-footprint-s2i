# Flight Carbon Footprint Calculator(Trave Green)
Travel Green is a project developed as the final part of the Frontend Developer course at start2impact. 
This is a web application built with React that calculates the carbon footprint of a flight using the GoClimate API. The app allows users to input flight details, then retrieves and displays the estimated carbon emissions for their trip.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Libraries](#libraries)
- [GoClimate API](#goclimate-api)
- [License](#license)

## Features
- Calculate the carbon footprint of a flight based on departure and arrival airports.
- Fetch and display carbon emission data using the [GoClimate API](https://www.goclimate.com).
- Clean and responsive user interface.
- Optimized routing and API data fetching for a smooth user experience.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/BreakingDev24/flight-carbon-footprint-s2i.git
    cd flight-carbon-footprint-s2i
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your GoClimate API key:

    Create a `.env` file in the root directory and add your API key:

    ```bash
    REACT_APP_GOCLIMATE_API_KEY=your_goclimate_api_key
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

1. Enter the details of your flight, including the departure and arrival airports.
2. Submit the form to calculate the carbon footprint of the flight.
3. The app will fetch and display the carbon emissions for the flight using data from the GoClimate API.

## Libraries

This project uses the following major libraries:

- **React Router Dom**: For client-side routing.
- **React Query**: For fetching and managing API data.
- **React Helmet Async**: To manage the document head for SEO.
- **MUI (Material-UI)**: For building the user interface and components.

## GoClimate API

The GoClimate API is used to calculate the carbon footprint of flights based on specific route data. You can find more information on how to get an API key and use it in your project from the official [GoClimate API documentation](https://www.goclimate.com/api).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
