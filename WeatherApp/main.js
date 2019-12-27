
//when there is error with zipcode input
function errZip() {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.error').innerText = "Please enter a valid Zip Code";
    document.querySelector('.queryResult').style.display = "none";
    console.log("Zip code is incorrect");
}






// Validating and displaying the weather details:
function displayWeatherDetails() {
    //declaring the zipcode
    let zipcode = Number(document.getElementById("zipCode").value);
    console.log(zipcode);
    
    //if the zipcode length is less tha 6 character throw an error
    if (document.querySelector("#zipCode").value.length < 6) {
    return errZip();
    } 
    //else proceed to display data 
    else {
        console.log("user entered: " + zipcode);
        document.getElementById('showZipCode').innerHTML = zipcode;
    
        // ********* handling the api *********//

        // assigning the user input zipcode + api url to a variable apiURL
        let apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',IN&APPID=12ce53b8c874286c7b96bb5c902fc70a&units=metric';
        console.log(apiURL);

        //fetching the data from url
        fetch(apiURL)
        .then(function (response) {
                // The JSON data will arrive here

                //if the zipcode is not valid, throw an error
            if ((response.status == 404) || (response.status == 400)) {
                return errZip()

                //else proceed to get the response json data
            } else {

                    return response.json();
                }
            }) //once the data is succesfully pulled its then appended into object named data
            .then(function (data) {
                appendData(data);
            })
            // if anything goes wrong we can check the err msg thru catch
            .catch(function (err) {
                console.log("Error is " + err);
 

            });

        function appendData(data) {
            //converting the fecthed date into short date
            const DATE = new Date(data.dt * 1000).toDateString();
            document.getElementById('currentDate').innerHTML = "Showing result for: " + '<b>' + DATE + '</b>';

            //converting sunrise and sunset api value into standard time and date value
            let sunrise = new Date(1000 * data.sys.sunrise).toLocaleTimeString();
            let sunset = new Date(1000 * data.sys.sunset).toLocaleTimeString();
            // assigning api data into respective ID's of html page
            document.getElementById('areaName').innerHTML = data.name;
            document.getElementById('currentTemperature').innerHTML = '<b>' + data.main.temp + "</b>" + "&deg;&#160;C";
            document.getElementById('condition').innerHTML = data.weather[0].main;
            document.getElementById('sunriseTime').innerHTML = sunrise;
            document.getElementById('sunsetTime').innerHTML = sunset;
            document.getElementById('maxTemperature').innerHTML = '<b>' + data.main.temp_max + "</b>" + "&deg;&#160;C";
            document.getElementById('minTemperature').innerHTML = '<b>' + data.main.temp_min + "</b>" + "&deg;&#160;C";


        }
    }
// since we have hide the main result block on occurence of error, we need to make it visible once the zipcode is correct
    document.querySelector('.queryResult').style.display = "block";
    document.querySelector('.error').style.display = "none";

};



 