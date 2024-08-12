/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 35;
let totalCost = 0;

const full_Button = document.getElementById('full');
const half_Button = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clear_Button = document.getElementById('clear-button');

const monday_Button = document.getElementById('monday');
const tuesday_Button = document.getElementById('tuesday');
const wednesday_Button = document.getElementById('wednesday');
const thursday_Button = document.getElementById('thursday');
const friday_Button = document.getElementById('friday');

const daysSelected = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0
};



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function handleDayButtonClick(day) {
    return function () {
        const button = document.getElementById(day);
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            daysSelected[day]++;
        } else {
            button.classList.remove('clicked');
            daysSelected[day]--;
        }
        calculateTotalCost();
    };
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
monday_Button.addEventListener('click', handleDayButtonClick('monday'));
tuesday_Button.addEventListener('click', handleDayButtonClick('tuesday'));
wednesday_Button.addEventListener('click', handleDayButtonClick('wednesday'));
thursday_Button.addEventListener('click', handleDayButtonClick('thursday'));
friday_Button.addEventListener('click', handleDayButtonClick('friday'));





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half_Button.addEventListener('click', function () {
    costPerDay = 20;
    half_Button.classList.add('clicked');
    full_Button.classList.remove('clicked');
    calculateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
full_Button.addEventListener('click', function () {
    costPerDay = 35;
    full_Button.classList.add('clicked');
    half_Button.classList.remove('clicked');
    calculateTotalCost();
});

clear_Button.addEventListener("click", function () {
    monday_Button.classList.remove("clicked");
    tuesday_Button.classList.remove("clicked");
    wednesday_Button.classList.remove("clicked");
    thursday_Button.classList.remove("clicked");
    friday_Button.classList.remove("clicked");
    for (const day in daysSelected) {
        daysSelected[day] = 0;
    }

    calculateTotalCost();
});


function calculateTotalCost() {
    let totalDaysSelected = 0;
    for (const day in daysSelected) {
        totalDaysSelected += daysSelected[day];
    }
    totalCost = totalDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
}