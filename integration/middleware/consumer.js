const queue = require("./queue");

function processBookings() {
    console.log("\nProcessing laundry bookings...\n");

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
}

module.exports = processBookings;