const cardNumberInput = document.getElementById("card-number");
const cardLogo = document.getElementById("card-logo");

// cardNumberInput.addEventListener("input", function() {
//   // Remove non-numeric characters using a regular expression
//   this.value = this.value.replace(/[^0-9]/g, "");
// });

cardNumberInput.addEventListener("input", (e) => {
    // Remove any non-numeric characters
    const cardNumber = e.target.value.replace(/\D/g, "");

    // Display the card logo based on the first digit of the card number
    if (/^4/.test(cardNumber)) {
        cardLogo.style.backgroundImage = "url(images/visa-logo.png)";
    } else if (/^5/.test(cardNumber)) {
        cardLogo.style.backgroundImage = "url(images/mastercard-logo.png)";
    } else if (/^3[47]/.test(cardNumber)) {
        cardLogo.style.backgroundImage = "url(images/american_express-logo.png)";
    } else {
        cardLogo.style.backgroundImage = "none";
    }

    // Format the card number with spaces
    e.target.value = formatCardNumber(cardNumber);
});

function formatCardNumber(cardNumber) {
    const formatted = cardNumber.replace(/(\d{4})/g, "$1 ").trim();
    return formatted;
}

const form = document.getElementById("payment-form");
const cardholderNameInput = document.getElementById("card-holder-input");

form.addEventListener("submit", function(e) {
    const cardholderName = cardholderNameInput.value.trim();
    const names = cardholderName.split(" ");

    if (names.length < 2) {
        e.preventDefault(); // Prevent form submission
        alert(
            "Please enter at least a first name and last name for the cardholder."
        );
    }
});

const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from actually submitting

    // Simulate form submission
    // You can replace this with your actual form submission code
    setTimeout(() => {
        // Show the success message
        successMessage.style.display = "block";

        // Reset the form
        form.reset();

        // Hide the success message after a few seconds (e.g., 3 seconds)
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000); // 3000 milliseconds = 3 seconds
    }, 1000); // Simulate a delay of 1 second for form submission
});

const cvvInput = document.querySelector(".cvv-input");

cvvInput.addEventListener("input", function() {
    // Remove non-numeric characters using a regular expression
    this.value = this.value.replace(/[^0-9]/g, "");
});

document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerText =
        document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".card-holder-name").innerText =
        document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
    document.querySelector(".expire-month").innerText =
        document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
    document.querySelector(".expire-year").innerText =
        document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
    document.querySelector(".card-front").style.transform =
        "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".card-back").style.transform =
        "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
    document.querySelector(".card-front").style.transform =
        "perspective(1000px) rotateY(0deg)";
    document.querySelector(".card-back").style.transform =
        "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
    document.querySelector(".cvv-box").innerText =
        document.querySelector(".cvv-input").value;
};