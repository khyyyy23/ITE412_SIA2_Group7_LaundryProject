const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let customers = require("./customers");
let bookings = require("./bookings");

// GET all customers
app.get("/customers", (req, res) => {
    res.status(200).json(customers);
});

// POST a new customer
app.post("/customers", (req, res) => {
    const newCustomer = {
        id: customers.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };

    customers.push(newCustomer);

    res.status(201).json(newCustomer);
});

// GET all bookings
app.get("/bookings", (req, res) => {
    res.status(200).json(bookings);
});

// POST a new booking
app.post("/bookings", (req, res) => {
    const newBooking = {
        id: bookings.length + 1,
        customerId: req.body.customerId,
        service: req.body.service,
        pickupDate: req.body.pickupDate,
        status: req.body.status
    };

    bookings.push(newBooking);

    res.status(201).json(newBooking);
});

app.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});