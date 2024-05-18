//seleccion del etiquetas del DOM
//clases
let temperatura = document.querySelector('.temperatura')
let typewheater = document.querySelector('.typeweather')
let namecity = document.querySelector('.namecity')

//identificadores
let picture = document.getElementById('picture')

//esta es la geolocalizacion ,tomado desde la documentacion de la api
window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {

            //variables de longitud y latitud
            //let lon = position.coords.longitude
            //let lat = position.coords.latitude

            //la url de la API ,se ingresa la latitud la longitud y la API key

            //ubicacion actual
            //let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dee64b86038f6176be2f26ec663ac2b`;

            //ubicacion por ciudad
            let url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&appid=6dee64b86038f6176be2f26ec663ac2b`;
            console.log(url)

            //llamado a la API
            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    console.log(data)

                    //obtencion de datos JSON
                    let temp = Math.round(data.main.temp)
                    let type = data.weather[0].description
                    let pict = data.weather[0].icon
                    let city = data.name

                    //Url de la imagen
                    let pictureUlr = `https://openweathermap.org/img/wn/${pict}.png`


                    //cambios del DOM
                    temperatura.textContent = `${temp - 272} C`
                    typewheater.textContent = type
                    namecity.textContent = `${city}`

                    //creacion de imagen en el DOM
                    let img = document.createElement('img')
                    img.src = pictureUlr
                    picture.appendChild(img)

                })
                .catch(error => console.log(error))
        });
    } else {
        console.log("Geolocalización no está disponible en este navegador.");
    }


})