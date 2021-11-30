const searchForm = document.querySelector('.form-data');
const cords = document.querySelector('.search-location input');
const weather_det = document.querySelector('.weather_det');
const weather_det_more = document.querySelector('.weather_det_more');
const today = document.querySelector('.today');
var arr = [];
var arr2 = [];


window.onload = function() {
   
    
    requestCoordinates(6.9271, 79.8612)
        .then((data) => {
        
            
            for (var prop in data) {
                arr.push(data[prop]);
                
            }
            console.log("array data", arr)
            updateWeather(arr);
        })
        .catch((error) => { console.log(error) });
  };

// document.getElementById("btn").onclick = function() {

//     e.preventDefault();
//     const coordinates = cords.value.trim();
//     console.log(coordinates);
//     searchForm.reset();

//     const lat = splitCoordinate(coordinates)[0];
//     const lon = splitCoordinate(coordinates)[1];
//     console.log("coordinates", lat, lon);

//     //Making request
//     requestCoordinates(lat, lon)
//         .then((data) => {
//             updateWeather(data);
//         })
//         .catch((error) => { console.log(error) });
// }; 

// Add an event to the listner 
searchForm.addEventListener('submit', e => {
    console.log("Clicked");
    e.preventDefault();
    // const coordinates = cords.value.trim();
    var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
    // console.log(coordinates);
    searchForm.reset();

    // const lat = splitCoordinate(coordinates)[0];
    // const lon = splitCoordinate(coordinates)[1];
    // console.log("coordinates", lat, lon);

    //Making request
    requestCoordinates(lat, lon)
        .then((data) => {
            console.log("update", data)
            for (var prop in data) {
                arr2.push(data[prop]);
                
            }
            console.log("array data", arr2)
            updateWeather(arr2);
            // updateWeather(data);
        })
        .catch((error) => { console.log(error) });
});

//split
function splitCoordinate(cordi) {
    const arr = cordi.split(",");
    return arr;
}

//Converting Temperture Values getting from API
function kelvinToCelcies(kelvin) {
    const celcies = Math.round(kelvin - 273.15);
    return celcies;

}

function updateWeather(cords) {
  
    // Splitting Date
    const coordinates1 = cords[3][0].dt_txt.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    const imageName1 = cords[3][0].weather[0].icon;
    const iconSrc1 = `http://openweathermap.org/img/w/${imageName1}.png`

    const coordinates2 = cords[3][8].dt_txt.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    const imageName2 = cords[3][8].weather[0].icon;
    const iconSrc2 = `http://openweathermap.org/img/w/${imageName2}.png`

    const coordinates3 = cords[3][18].dt_txt.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    const imageName3 = cords[3][18].weather[0].icon;
    const iconSrc3 = `http://openweathermap.org/img/w/${imageName3}.png`

    const coordinates4 = cords[3][26].dt_txt.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    const imageName4 = cords[3][26].weather[0].icon;
    const iconSrc4 = `http://openweathermap.org/img/w/${imageName4}.png`

    const coordinates5 = cords[3][35].dt_txt.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    const imageName5 = cords[3][35].weather[0].icon;
    const iconSrc5 = `http://openweathermap.org/img/w/${imageName5}.png`
   
    
        weather_det.innerHTML = `
        <div class="col-4">
                <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
                    <div class="weather_det row d-flex justify-content-center px-3">
                        <div class="card">
                            <h2 class="city px-5 mr-4 mt-3 mb-0">${cords[4].name}</h2>
                            <div class="weather-cond">
                            <p class="weather px-5 mr-4 mb-0 med-font">${cords[3][0].weather[0].description}</p><img src="${iconSrc1}" alt="werather_icon" /></div>
                            <h1 class="temp px-5 mr-4 large-font">${kelvinToCelcies(cords[3][0].main.temp)}&deg;C</h1>
                            <p class="date px-5 ml-4 mb-4">${coordinates1[0]}</p>
                        </div>
                    </div>
              </div>
          </div>
          <div class="col-4">
                <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
                    <div class="weather_det row d-flex justify-content-center px-3">
                        <div class="card">
                            <h2 class="city px-5 mr-4 mt-3 mb-0">${cords[4].name}</h2>
                            <div class="weather-cond">
                            <p class="weather px-5 mr-4 mb-0 med-font">${cords[3][8].weather[0].description}</p><img src="${iconSrc2}" alt="werather_icon" /></div>
                            <h1 class="temp px-5 mr-4 large-font">${kelvinToCelcies(cords[3][8].main.temp)}&deg;C</h1>
                            <p class="date px-5 ml-4 mb-4">${coordinates2[0]}</p>
                        </div>
                    </div>
              </div>
          </div>
          <div class="col-4">
                <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
                    <div class="weather_det row d-flex justify-content-center px-3">
                        <div class="card">
                            <h2 class="city px-5 mr-4 mt-3 mb-0">${cords[4].name}</h2>
                            <div class="weather-cond">
                            <p class="weather px-5 mr-4 mb-0 med-font">${cords[3][18].weather[0].description}</p><img src="${iconSrc3}" alt="werather_icon" /></div>
                            <h1 class="temp px-5 mr-4 large-font">${kelvinToCelcies(cords[3][18].main.temp)}&deg;C</h1>
                            <p class="date px-5 ml-4 mb-4">${coordinates3[0]}</p>
                        </div>
                    </div>
              </div>
          </div>
        `
        weather_det_more.innerHTML = `
        <div class="col-6">
                <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
                    <div class="weather_det row d-flex justify-content-center px-3">
                        <div class="card">
                            <h2 class="city px-5 mr-4 mt-3 mb-0">${cords[4].name}</h2>
                            <div class="weather-cond">
                            <p class="weather px-5 mr-4 mb-0 med-font">${cords[3][26].weather[0].description}</p><img src="${iconSrc4}" alt="werather_icon" /></div>
                            <h1 class="temp px-5 mr-4 large-font">${kelvinToCelcies(cords[3][26].main.temp)}&deg;C</h1>
                            <p class="date px-5 ml-4 mb-4">${coordinates4[0]}</p>
                        </div>
                    </div>
              </div>
          </div>
          <div class="col-6">
                <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
                    <div class="weather_det row d-flex justify-content-center px-3">
                        <div class="card">
                            <h2 class="city px-5 mr-4 mt-3 mb-0">${cords[4].name}</h2>
                            <div class="weather-cond">
                            <p class="weather px-5 mr-4 mb-0 med-font">${cords[3][35].weather[0].description}</p><img src="${iconSrc5}" alt="werather_icon" /></div>
                            <h1 class="temp px-5 mr-4 large-font">${kelvinToCelcies(cords[3][35].main.temp)}&deg;C</h1>
                            <p class="date px-5 ml-4 mb-4">${coordinates5[0]}</p>
                        </div>
                    </div>
              </div>
          </div>
        `



}

function updateDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yy = String(today.getFullYear());

    var currentDate = dd + mm + yy;
    console.log(currentDate);

    return currentDate;
}

