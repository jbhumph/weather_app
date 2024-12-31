import "./styles.css";

import { pickBox } from "./pickBox";
import { drawCompare } from "./drawCompare";
import { drawDetail } from "./drawDetail";

let cities = ["", ""];

pickBox();

const location_A = document.getElementById("location_A");
const location_B = document.getElementById("location_B");
const submit_A = document.getElementById("button_A");
const submit_B = document.getElementById("button_B");

let city_A = {days: []}
let city_B = {days: []}

submit_A.addEventListener("click", () => {
    cities[0] = location_A.value;
    console.log(cities);
    city_A = {days: []}
    let response = getData(cities[0], city_A);
    response.then(response => {
        drawCompare(city_A, city_B);
    })
})

submit_B.addEventListener("click", () => {
    cities[1] = location_B.value;
    console.log(cities);
    city_B = {days: []}
    let response = getData(cities[1], city_B);
    response.then(response => {
        drawCompare(city_A, city_B);
    })
})


async function getData(city, cityObj) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=W7QKBZUEEVDDPTLUPGVXZB4XY&contentType=json`)
        const data = await response.json();
        console.log(data);
        cityObj.resolvedAddress = data.resolvedAddress;
        cityObj.description = data.description;
        cityObj.latitude = data.latitude;
        cityObj.longitude = data.longitude;
        for (let i = 0; i < 7; i++) {
            cityObj.days.push({conditions: data.days[i].conditions, datetime: data.days[i].datetime, icon: data.days[i].icon, temp: data.days[i].temp, description: data.days[i].description});
        }
        console.log(cityObj);
    } catch (error) {
        console.log(error)
        alert("Something went wrong")
    }
}