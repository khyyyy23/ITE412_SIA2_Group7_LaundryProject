const queue = require("./queue");

console.log("=== SPNRCO MESSAGING MIDDLEWARE DEMO ===\n");

// PRODUCER
function submitBooking(customer, service, amount, schedule) {
    const booking = {
        customer,
        service,
        amount,
        schedule
    };

    queue.push(booking);

    console.log(
        `Laundry booking submitted: ${customer}, ${service}, ₱${amount}, ${schedule}`
    );
}

// Send 3 booking requests
submitBooking(
    "Juan Dela Cruz",
    "Wash and Fold",
    500,
    "2026-10-01 10:00 AM"
);

submitBooking(
    "Maria Santos",
    "Wash and Dry",
    800,
    "2026-10-01 1:00 PM"
);

submitBooking(
    "Pedro Reyes",
    "Premium Laundry",
    1200,
    "2026-10-02 9:00 AM"
);

// CONSUMER
console.log("\n--- Consumer Processing ---\n");

while (queue.length > 0) {
    const booking = queue.shift();

    if (booking.amount <= 1000) {
        console.log(
            `Laundry booking for ${booking.customer} → Accepted`
        );
    } else {
        console.log(
            `Laundry booking for ${booking.customer} → Rejected`
        );
    }
}

console.log("\n=== PROCESS COMPLETE ===");