const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_rel_value = document.getElementById("temp_rel_value");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityname.value;

  if (cityVal === "") {
    city_name.innerText = `Please write the City Name Before Search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1228cd1e4f5c81284f965fff254fd6d1`;
      const response = await fetch(url);
      const data = await response.json();

      const arrData = [data];
      console.log(arrData);
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_rel_value.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;

      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class = 'fas fa-cloud-showers-heavy' style = 'color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class = 'fas fa-cloud' style = 'color: #eccc68;'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Please Enter the City Name Properly`;
      datahide.classList.add("data_hide");
    }
  }
};
submitbtn.addEventListener("click", getInfo);
