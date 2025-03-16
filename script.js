// Function to change counter value
function changeValue(counterId, change) {
    let countElement = document.getElementById(`count${counterId}`);
    let currentValue = parseInt(countElement.innerText);
    countElement.innerText = currentValue + change;
}