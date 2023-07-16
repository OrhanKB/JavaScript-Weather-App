
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const APIKey = ""

   //divs
   const firstDiv = document.querySelector(".first-area")
   const app = document.querySelector(".app")
   //divs

   //first div tags
   const firstText = document.querySelector(".first-text")
   const firstBtn  = document.querySelector(".first-button")
   //first div tags


   //
   const text = document.getElementById("text")
   const button = document.getElementById("button")
   const body = document.body
   const details = document.querySelector(".details")
   const cities = document.querySelector(".city")
   const error = document.querySelector(".error")
   //

      app.style.display = "none"



   const fetchAPI = async (city) => {
      try {

         const res = await fetch(APIUrl +  /*city*/encodedCity + `&appid=${APIKey}`)
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

      


         // DAY-  NIGHT
         const img = document.getElementById("pic")
         const currentTimeStamp = new Date()
         const sunRise = new Date(data.sys.sunrise * 1000)
         const sunSet = new Date(data.sys.sunset * 1000)
      // DAY-  NIGHT
      

         

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
               img.setAttribute("src", "js/img/night-mode.png")
               break
               case "Clouds":
                  img.setAttribute("src", "js/img/cloud.png")
                  break
               case "Rain":
                  img.setAttribute("src", "js/img/rain.png")
            }
         }

         

      } catch(err) {
         console.log(err)

         
            if(cities.value === undefined) {
            details.setAttribute("style", "margin-top: 60px; color: red; font-size: 20px")
            details.innerHTML = "enter valid city name"; 
         

         } 
   
         

   } }

   //first div eventlistener

   firstBtn.addEventListener("click", e => {
      app.style.display ="block"
      firstDiv.style.display ="none"
      fetchAPI(text.value = firstText.value)
   })

   firstDiv.addEventListener("keypress", e => {
      if(e.key === "Enter") {
         app.style.display="block"
         firstDiv.style.display = "none"
         fetchAPI(text.value = firstText.value)
      }
      
   })

   //first div eventlistener

   body.addEventListener("keypress", e => {
      if(e.key === "Enter") {
         fetchAPI(text.value)
      }
   })

   button.addEventListener("click", e => {
      fetchAPI(text.value);
      
   }) 
















