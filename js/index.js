let userCityInput = document.getElementById("search-input-city");
let cityInput;
let cityData

// Updating the cityInput value with users search value
userCityInput.addEventListener('input', async () => {
    // ! l'errore è in cityInput
    let response;
    cityInput = userCityInput.value

    if (cityInput.length > 2) {

        try {
            response = await fetch(`./netlify/functions/geolog?city=${cityInput}`);
            cityData = await response.json();
        }

        catch (error) {
            console.error(error.message, error);
        }
    }

    return console.log(cityData);
});




// function getCity(input){
//     fetch(`${geocodingUrl}${cityInput}${limitAndKey}`)
//     .then(res => res.json())
//     .then(data => {
//         cityData = data
//     })
// }


// * Saving the coordinates of the chosen city in two variables
// const lat = ;
// const long = ;


// Fetching meteo data with lat & long

// Updating UI with such data