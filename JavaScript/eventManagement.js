const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

function logAttendeeName(attendee) {
    console.log(attendee.name);
}

function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
}

function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendee) {
    delete attendee.event;
}

function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}


// Call the functions

logAttendeeName(attendee);

logTicketPrice(attendee);

updateTicketType(attendee, "Regular");

updateTicketPrice(attendee, 200);

removeEventProperty(attendee);

addCheckedInProperty(attendee);


// Display the final attendee object

console.log(attendee);