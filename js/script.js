
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const APIKey = "a47b05936d8137fab000199f60bf008d"


//DOC
const body = document.body
const text = document.querySelector(".text")
const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const second = document.querySelector(".second")

//DOC
   const fetchAPI = async (city) => {
    
    try {
        const res = await fetch( APIUrl + city + `&appid=${APIKey}`);
        
        if(res.status == 404) {
            error.style.display = "flex"
            second.style.display= "none"
        } else {
            const data = await res.json();
            second.style.display="flex"
            error.style.display ="none"

        
            const weather = data.weather[0].main
        //DOC
        const heat = document.querySelector(".heat").innerHTML = Math.round(data.main.temp) +` °C`
        const cityName = document.querySelector(".city");
        cityName.innerHTML = data.name.split(" ").shift().toUpperCase();
        const cityNameWidth = cityName.getBoundingClientRect().width;
        const leftDiv = document.querySelector(".left")
        const leftWidth = leftDiv.getBoundingClientRect().width
        
        
        
        
        const img = document.querySelector(".img")
        const humidity = document.querySelector(".hum-num").innerHTML = data.main.humidity + ` %`
        const wind = document.querySelector(".wind-num").innerHTML = data.wind.speed + ` km/h`
        const desc = document.querySelector(".description").innerHTML = data.weather[0].main
        const min = document.querySelector(".min-c")
        const max = document.querySelector(".max-c")
        const hum = document.querySelector(".humidity-c")
        const win = document.querySelector(".wind-c")
        //DOC

    
        //DAY-NIGHT
        const currentTime = new Date()
        const sunSet = new Date(data.sys.sunset * 1000)
        const sunRise = new Date(data.sys.sunrise * 1000)
        //DAY-NIGHT



        switch(weather) {
            case "Clear" : 
           img.setAttribute("src" , "js/img/sun (1).png")
            break
            case "Rain" : 
            img.setAttribute("src", "js/img/rainy (1).png")
            break
            case "Clouds":
                img.setAttribute("src", "js/img/cloud (1).png")
                break
            case "Snow":
                img.setAttribute("src", "js/img/snowfake.png")
                break
            case "Mist" : 
                img.setAttribute("src", "js/img/haze.png")
                break
            case "Thunderstorm" : 
                img.setAttribute("src", "img/js/thunderstorm.png")
                break
            case "Drizzle":
                img.setAttribute("src", "drizzle (1).png")
            }

            if(currentTime > sunRise && currentTime < sunSet) {
                img
            } else {
                switch(weather) {
                    case "Clear":
                        img.setAttribute("src", "js/img/night-mode (1).png")
                        break
                }
            }

    
    } }
     
     catch(err) {
        console.log(err)
    }
   }
   

    btn.addEventListener("click", e => {
        fetchAPI(text.value)
   })
   
   body.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        fetchAPI(text.value)
    }
   }) 

   


   

   
   















