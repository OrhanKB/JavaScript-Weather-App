const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const APIKey = ""

const text = document.getElementById("text")
const button = document.getElementById("button")
const body = document.body
const details = document.querySelector(".details")
const cities = document.querySelector(".city")


const fetchAPI = async (city) => {
   try {
      const res = await fetch(APIUrl + city + `&appid=${APIKey}`)
      const data = await res.json()

      //DOC
      const cityName = document.querySelector("h2").innerHTML = data.name
      const temp = document.getElementById("temp").innerHTML = data.main.temp + ` °C`
      const weather = document.getElementById("weath").innerHTML = data.weather[0].main
      const min = document.getElementById("min").innerHTML =data.main.temp_min +  `°C`
      const max = document.getElementById("max").innerHTML = data.main.temp_max + ` °C`
      const wind = document.getElementById("wind").innerHTML = data.wind.speed + ` km/h`
      const humidity = document.getElementById("humidity").innerHTML = data.main.humidity + `%`     
      //DOC
      const img = document.getElementById("pic")
      const currentTimeStamp = new Date()
      const sunRise = new Date(data.sys.sunrise * 1000)
      const sunSet = new Date(data.sys.sunset * 1000)
     
      console.log("sunrrise", sunRise)
      console.log("sunset", sunSet)

      

      switch(weather) {
         case "Clear" : 
         img.setAttribute("src", "js/img/sun.png")
         break

         case "Thunderstorm" :
            img.setAttribute("src", "js/img/cloud-bolt-solid.svg")  
            break

         case "Clouds":
               img.setAttribute("src", "js/img/cloudy.png")
               break
         case "Mist":
            img.setAttribute("src", "js/img/fog2.png")
            break
         case "Rain":
            img.setAttribute("src", "js/img/rain.png")
      }

      if(currentTimeStamp > sunRise && currentTimeStamp < sunSet ) {
         img
      } else{
         switch(weather) {
            case "Clear":
            img.setAttribute("src", "js/img/moon-solid.svg")
            break
            case "Clouds":
               img.setAttribute("src", "js/img/cloud-moon-solid.svg")
               break
            case "Rain":
               img.setAttribute("src", "js/img/rain.png")
         }
      }

      

   } catch(err) {
      console.log(err)
      if(cities.innerHTML == "undefined") {
         details.innerHTML = "Enter valid city name"
      }
}

}

body.addEventListener("keypress", e => {
   if(e.key === "Enter") {
      fetchAPI(text.value)
   }
})

 button.addEventListener("click", e => {
   fetchAPI(text.value);
}) 

