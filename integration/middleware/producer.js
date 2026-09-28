const queue = require("./queue");

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

// Sample booking requests
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