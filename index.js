let userCityInput = document.getElementById("search-input-city");
let cityInput;
let cityData

// Updating the cityInput value with users search value
userCityInput.addEventListener('input', () => {

    cityInput = userCityInput.value
    
    if (cityInput.length > 3) {
        
        try{getCity(cityData)}
        catch{console.error(error)}
    }

    console.log(cityData);
});



// Fetching a list of cities with cityInput and showing in page the first 6 results
function getCity(input){
    fetch(`${geocodingUrl}${cityInput}${limitAndKey}`)
    .then(res => res.json())
    .then(data => {
        cityData = data
    })
}


// * Saving the coordinates of the chosen city in two variables
// const lat = ;
// const long = ;


// Fetching meteo data with lat & long

// Updating UI with such data