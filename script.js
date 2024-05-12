//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial



let API_KEY="86fd8461d7f1ba9aa398c03eddbcc526";
getWeatherDate=(city)=>
    {
        const URL='https://api.openweathermap.org/data/2.5/weather';
        const Full_Url=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
        const weatherPromise = fetch(Full_Url);
        console.log(city)
        return weatherPromise.then((response)=>{
            return response.json()
        }
        )

    }

    function searchCity(){
        const city=document.getElementById("city-input").value;

        getWeatherDate(city)
        .then((response)=>
        {
            showWeatherData(response)
        
        })
        .catch((err)=>
        {
            console.log(err)
        })

    }
    showWeatherData =(weatherData)=>
        {
            document.getElementById('city-name').innerText=weatherData.name;
            document.getElementById('weather-type').innerText=weatherData.weather[0].main;
            document.getElementById('temp').innerText=weatherData.main.temp;
            document.getElementById('min-temp').innerText=weatherData.main.temp_min;
            document.getElementById('max-temp').innerText=weatherData.main.temp_max;

        }