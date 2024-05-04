# EasyTrucking

**EasyTrucking** is a comprehensive web application designed to streamline the operations for truck drivers, enabling them to easily connect, navigate, and manage their trucking activities. This project was developed as part of the Schneider Industry Partner Project to improve truck driver retention by providing a more integrated and supportive operational system.

## Repository Link

- [Visit the repository](https://github.com/mrugankp/Schneider-1)

## Setup Steps

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**
   git clone https://github.com/mrugankp/Schneider-1.git
  
2. **Navigate to the project directory:**
   cd Schneider-1/EasyTrucking/easytrucking/src

3. **Install dependencies:**
   npm install

4. **Start the react application:**
   npm start

5. **Open a new terminal and run backend:**
   node app.js
   

## Overview of How the Code Works

The application consists of several key components:

- **StartScreen:** Acts as the entry point where users can join the platform.
- **SignUp and Login:** Authentication processes for the application.
- **TruckConnect:** Main dashboard providing navigation to various functionalities like maps, stats, and maintenance videos.
- **MapComponent:** Integrates mapping and geolocation services for route management.
- **App.js:** Sets up the server, API endpoints, and integrates Sequelize for database operations.
- **CommunicationsChannel:** Implemented a communication platform where truck drivers can communicate with each other (call/text).
- **MaintenancePage:** Implemented a training modules page for truck drivers to watch training videos.

The back-end is built with Node.js, Express.js, and uses Sequelize ORM for database interactions, while the front-end leverages ReactJS for a dynamic user interface.

## What Works & What Doesn’t

### Working Features

- User authentication (signup and login).
- Interactive maps with real-time navigation.
- Dynamic stat tracking on the dashboard (i.e. distance and time to destination along with live GPS tracker)
- Interactive training modules page
- Communications platform for calling/texting

### Limitations

- The statistics page contains some static data which currently isn't updated dynamically. This includes placeholders for data visualization which are meant to display real-time analytics.

## Future Improvements

- **Dynamic Data Integration:** Implement APIs to fetch real-time data for the stats page, removing the reliance on static data.
- **Enhanced Security Measures:** Improve security by hashing passwords and implementing JWT for session management.
- **User Experience Enhancements:** Redesign the user interface for better usability and accessibility.
- **Expand Functionalities:** Introduce features like predictive maintenance alerts, fuel tracking, and advanced route optimization.
- **Community Features:** Develop a community platform within the app for drivers to connect and share insights, which could further help reduce driver turnover.

Feel free to clone the repository, explore the code, and contribute to the future of trucking logistics with EasyTrucking!

