# Backend Project

This is a backend application that provides an API for managing users and their habits. It is built using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on the `.env.example` template and fill in the required environment variables.

## Usage

To start the server, run:
```
node server.js
```
The server will start on the specified port (default is 3000).

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

### Habits

- `GET /api/habits`: Retrieve all habits.
- `POST /api/habits`: Create a new habit.
- `PUT /api/habits/:id`: Update an existing habit.
- `DELETE /api/habits/:id`: Delete a habit.

## Environment Variables

The following environment variables are required:

- `PORT`: The port on which the server will run.
- `DB_CONNECTION_STRING`: The connection string for the database.
- `JWT_SECRET`: The secret key for JWT authentication.

## License

This project is licensed under the MIT License.