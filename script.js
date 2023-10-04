// Function to calculate age in days
function calculateAgeInDays() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const daysInYear = 365;

    if (!name || isNaN(age)) {
        alert("Please enter valid name and age.");
        return;
    }

    const ageInDays = age * daysInYear;
    const resultMessage = `${name}, your age in days is approximately ${ageInDays} days.`;

    document.getElementById("result").textContent = resultMessage;
}

// Attach click event to the "Calculate" button
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateAgeInDays);
