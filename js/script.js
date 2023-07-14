const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const yourAPIKey = ""

const text = document.getElementById("text")
const button = document.getElementById("button")


const fetchAPI = async (city) => {
   try {
      const res = await fetch(APIUrl + city + `&appid=${APIKey}`)
      const data = await res.json()

      //DOC
      const cityName = document.querySelector("h2").innerHTML = data.name
      const temp = document.getElementById("temp").innerHTML = data.main.temp + ` °C`
      const weather = document.getElementById("weath").innerHTML = data.weather[0].main
      const min = document.getElementById("min").innerHTML = data.main.temp_min +  `°C`
      const max = document.getElementById("max").innerHTML = data.main.temp_max + ` °C`
      const wind = document.getElementById("wind").innerHTML = data.wind.speed + ` km/h`
      const humidity = document.getElementById("humidity").innerHTML = data.main.humidity + `%`     
      //DOC
      const img = document.getElementById("pic")
      console.log(weather)

   if(weather === "Clear") {
      img.setAttribute("src", "js/img/sun.png")
   } else if (weather==="Thunderstorm") { 
      img.setAttribute("src", "")
   }

   } catch(err) {
      console.log(err)
   }
}

button.addEventListener("click", e => {
   fetchAPI(text.value);
})
