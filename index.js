let userCityInput = document.getElementById("search-input-city");
let cityInput;

// Updating the cityInput value with users search value
userCityInput.addEventListener('input', () => {

    cityInput = userCityInput.value
    console.log(cityInput);
});


// Fetching a list of cities with cityInput and showing in page the first 6 results



// * Saving the coordinates of the chosen city in two variables
// const lat = ;
// const long = ;


// Fetching meteo data with lat & long

// Updating UI with such data