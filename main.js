// const cityInput = document.querySelector('.city-input')
// const searchBtn = document.querySelector('.search-btn')

// const notFoundSection = document.querySelector('.not-found')
// const searchCitySeation =document.querySelector('.search-city')
// const weatherInfoSeaction = document.querySelector('.weather-info')
// const countryTxt = document.querySelector('.country-txt')
// const tempTxt = document.querySelector('.temp-txt')
// const conditionTxt = document.querySelector('.condition-txt')
// const humidityValueTxt = document.querySelector('.humidity-value-txt')
// const windValueTxt = document.querySelector('.wind-value-txt')
// const weatherSummaryImg = document.querySelector('.weather-summry-img')
// const currentDateTxt = document.querySelector('.current-data-txt')

// const forecastsItemContaier = document.querySelector('.forecast-items-container')
// const apiKey = 'ec1a5f776b3858423166eb35dbdb2d82'
// searchBtn.addEventListener('click' , ()=>{

//     if (cityInput.value.trim() !=''){
//     updateweatherInfo(cityInput.value)
//         cityInput.value=''
//         cityInput.blur()
//     }
    
// })

// cityInput.addEventListener('keydown' , (event) =>{
//     if(event.key == 'Enter' && cityInput.value.trim() !=''){
//     updateweatherInfo(cityInput.value)
//         cityInput.value=''
//         cityInput.blur()

//     }
    
// })

//  async function getFetchData(endPoint , city){
//     const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
//     const response = await fetch(apiUrl)

//     return response.json()
    
// }


// function getWeaatherIcon(id){
// if (id <= 232) return 'thunderstorm.svg'
// if (id <= 321) return 'drizzle.svg'    
// if (id <= 531) return 'rain.svg'    
// if (id <= 622) return 'snow.svg'   
// if (id <= 781) return 'atmosphere.svg'
// if (id <= 800) return 'clear.svg'    
// else return 'clouds.svg'
// }

// function getCurrentDate(){
//     const currentDate = new Date()
//     const opitions = {
//         weekday: 'short',
//         day: '2-digit',
//         month: 'short'
//     }
//     return currentDate.toLocaleDateString('en-GB', opitions)
// }

// async function updateweatherInfo(city){
//     const weatherData = getFetchData('weather' , city)

//         if(weatherData.cod !=200){
//             showDisplaySection(notFoundSection)
//             console.log(weatherData);
//             return
//         }

//         const {
//             name: country,
//             main: {temp , humidity},
//             weather: [{id , main }],
//             wind: {speed}
//         } = weatherData

//         countryTxt.textContent = country
//         tempTxt.textContent = Math.round(temp) + ' C'
//         conditionTxt.textContent = main
//         humidityValueTxt.textContent = humidity + '%'
//         windValueTxt.textContent = speed + 'M/S'
//         currentDateTxt.textContent =getCurrentDate() 
//         weatherSummaryImg.scr = `assets/waether/${getWeaatherIcon(id)}`

//         await updateForecatsInfo(city)


//     showDisplaySection(weatherInfoSeaction)
// }

// async function updateForecatsInfo(city){
//     const forecastsDate = await getFetchData('forecast' , city) 

//     const timeTaken = '12:00:00'
//     const todayDate = new Date().toISOString().split('T')[0];


//     forecastsItemContaier.innerHTML = ''
//     forecastsDate.list.forEach(forecastWeather => {
//         if(forecastWeather.dt_txt.includs(timeTaken) && 
//         !forecastWeather.dt_txt.includs(todayDate)){
//             updateForecatsItem(forecastWeather)
//         }

//     })
// }

// function  updateForecatsItem(weatherData){
//      const {
//         dt_txt: date,
//         weather: [{id}],
//         main: {temp}
//     } = weatherData

//     const dateTaken = new Date(date)
//     const dateOptin = {
//         day: '2-digit',
//         month : 'short'
//     }

//     const dateResult = dateTaken.toLocaleDateString('en-US' ,dateOptin)
//     const forecastitem = `
//      <div class="forecast-item">
//                     <h5 class="forecast-item-date reguler-txt">${dateResult}</h5>
//                      <img src="assets/weather/${getWeaatherIcon(id)}" class="forecast-iteam-img"> 
//                  <h5 class="forecast-item-temp">${Math.round(temp)} C</h5>  
//      </div>
//     `

//     forecastsItemContaier.insertAdjacentElement('beforeend' , forecastitem)
// }

// function showDisplaySection(sectionn){
//     [weatherInfoSeaction , searchCitySeation , notFoundSection]
//     .forEach(sectionn => sectionn.style.display = 'flex') 
//     // sectionn.style.display = 'flex'
// }



const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');
const weatherInfoSection = document.querySelector('.weather-info');
const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const conditionTxt = document.querySelector('.condition-txt');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryImg = document.querySelector('.weather-summry-img');
const currentDateTxt = document.querySelector('.current-data-txt');

const forecastsItemContainer = document.querySelector('.forecast-items-container');
const apiKey = 'ec1a5f776b3858423166eb35dbdb2d82';

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

async function getFetchData(endPoint, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    return response.json();
}

function getWeatherIcon(id) {
    if (id <= 232) return 'thunderstorm.svg';
    if (id <= 321) return 'drizzle.svg';
    if (id <= 531) return 'rain.svg';
    if (id <= 622) return 'snow.svg';
    if (id <= 781) return 'atmosphere.svg';
    if (id <= 800) return 'clear.svg';
    return 'clouds.svg';
}

function getCurrentDate() {
    const currentDate = new Date();
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    };
    return currentDate.toLocaleDateString('en-GB', options);
}

async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('weather', city); // Added 'await'

    if (weatherData.cod !== 200) {
        showDisplaySection(notFoundSection);
        console.log(weatherData);
        return;
    }

    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData;

    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp) + ' C';
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = humidity + '%';
    windValueTxt.textContent = speed + ' M/S';
    currentDateTxt.textContent = getCurrentDate();
    weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`; // Fixed 'scr' to 'src'

    await updateForecastsInfo(city);
    showDisplaySection(weatherInfoSection);
}

async function updateForecastsInfo(city) {
    const forecastsData = await getFetchData('forecast', city);

    const timeTaken = '12:00:00';
    const todayDate = new Date().toISOString().split('T')[0];

    forecastsItemContainer.innerHTML = '';
    forecastsData.list.forEach(forecastWeather => {
        if (forecastWeather.dt_txt.includes(timeTaken) && 
            !forecastWeather.dt_txt.includes(todayDate)) { // Fixed 'includs' to 'includes'
            updateForecastItem(forecastWeather);
        }
    });
}

function updateForecastItem(weatherData) {
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData;

    const dateTaken = new Date(date);
    const dateOptions = {
        day: '2-digit',
        month: 'short'
    };

    const dateResult = dateTaken.toLocaleDateString('en-US', dateOptions);
    const forecastItem = `
        <div class="forecast-item">
            <h5 class="forecast-item-date reguler-txt">${dateResult}</h5>
            <img src="assets/weather/${getWeatherIcon(id)}" class="forecast-iteam-img"> 
            <h5 class="forecast-item-temp">${Math.round(temp)} C</h5>  
        </div>
    `;

    forecastsItemContainer.insertAdjacentHTML('beforeend', forecastItem);
}

function showDisplaySection(section) {
    [weatherInfoSection, searchCitySection, notFoundSection].forEach(sec => {
        sec.style.display = 'none'; // Hide all sections first
    });
    section.style.display = 'flex'; // Show the requested section
}
