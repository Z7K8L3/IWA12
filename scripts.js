// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

const book1StatusElement = document.querySelector("#book1 .status");
const book1Reserve = document.querySelector("#book1 .reserve");
const book1Checkout = document.querySelector("#book1 .checkout");
const book1Checkin = document.querySelector("#book1 .checkin");

const book1Status = book1StatusElement.textContent.toLowerCase();
const book1StatusData = STATUS_MAP[book1Status];

book1Reserve.disabled = !book1StatusData.canReserve;
book1Checkout.disabled = !book1StatusData.canCheckout;
book1Checkin.disabled = !book1StatusData.canCheckIn;

book1Reserve.style.color = book1StatusData.canReserve ? "black" : "gray";
book1Checkout.style.color = book1StatusData.canCheckout ? "black" : "gray";
book1Checkin.style.color = book1StatusData.canCheckIn ? "black" : "gray";

book1StatusElement.style.color = book1StatusData.color;

const book2StatusElement = document.querySelector("#book2 .status");
const book2Reserve = document.querySelector("#book2 .reserve");
const book2Checkout = document.querySelector("#book2 .checkout");
const book2Checkin = document.querySelector("#book2 .checkin");

const book2Status = book2StatusElement.textContent.toLowerCase();
const book2StatusData = STATUS_MAP[book2Status];

book2Reserve.disabled = !book2StatusData.canReserve;
book2Checkout.disabled = !book2StatusData.canCheckout;
book2Checkin.disabled = !book2StatusData.canCheckIn;

book2Reserve.style.color = book2StatusData.canReserve ? "black" : "gray";
book2Checkout.style.color = book2StatusData.canCheckout ? "black" : "gray";
book2Checkin.style.color = book2StatusData.canCheckIn ? "black" : "gray";

book2StatusElement.style.color = book2StatusData.color;

const book3StatusElement = document.querySelector("#book3 .status");
const book3Reserve = document.querySelector("#book3 .reserve");
const book3Checkout = document.querySelector("#book3 .checkout");
const book3Checkin = document.querySelector("#book3 .checkin");

const book3Status = book3StatusElement.textContent.toLowerCase();
const book3StatusData = STATUS_MAP[book3Status];

book3Reserve.disabled = !book3StatusData.canReserve;
book3Checkout.disabled = !book3StatusData.canCheckout;
book3Checkin.disabled = !book3StatusData.canCheckIn;

book3Reserve.style.color = book3StatusData.canReserve ? "black" : "gray";
book3Checkout.style.color = book3StatusData.canCheckout ? "black" : "gray";
book3Checkin.style.color = book3StatusData.canCheckIn ? "black" : "gray";

book3StatusElement.style.color = book3StatusData.color;
