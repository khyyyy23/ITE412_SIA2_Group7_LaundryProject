# SPNRCO REST API

The SPNRCO REST API provides endpoints for managing customers and laundry bookings.

## How to Run

1. Open the project folder in VS Code.
2. Open the terminal.
3. Run `npm install`.
4. Run `node src/api/server.js`.
5. Open Postman and test the API endpoints.

## API Endpoints

### Customers

**GET /customers**
Returns all customer records.

**POST /customers**
Adds a new customer.

### Bookings

**GET /bookings**
Returns all laundry bookings.

**POST /bookings**
Adds a new laundry booking.

## Base URL

`http://localhost:3000`

The API uses dummy in-memory data, so the records are only available while the server is running.
