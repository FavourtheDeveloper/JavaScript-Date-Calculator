const button = document.getElementById("butt");
const dateInput = document.getElementById("dateinput");
const result = document.getElementById("result");

button.addEventListener('click', getInfo);

function getInfo() {
    const userDateInput = new Date(dateInput.value);
    const userYear = userDateInput.getFullYear();
    const userMonth = userDateInput.getMonth() + 1;
    const userDay = userDateInput.getDate();

    const presentDate = new Date();
    const presentYear = presentDate.getFullYear() - userYear;
    const presentMonth = (presentDate.getMonth() + 1) - userMonth;
    const presentDay = presentDate.getDate() - userDay;

    result.innerHTML = `You are ${presentYear} years and ${presentMonth} months old`;
}
