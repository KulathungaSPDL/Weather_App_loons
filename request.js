// API key for Weather Data
const key = "525fd52560ea238b30a6278c9225ecd0";

// // URL for getting Weather Data for Colombo city
// const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a1499b64e333d5045e07a6b2616e31cb`;
// https: //api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a1499b64e333d5045e07a6b2616e31cb
// // // Fetching Data of city colombo
// fetch(baseURL).then((data) => { console.log("response :", data) });
// https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=525fd52560ea238b30a6278c9225ecd0

const requestCoordinates = async(lat, lon) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
    const query = `?lat=${lat}&lon=${lon}&appid=${key}`;

    //Making Fetch Call (Promise Call)
    const response = await fetch(baseURL + query);

    //promise Data
    const data = await response.json();
    // console.log("data", data)
    return data;
    
}

requestCoordinates(35, 139);

