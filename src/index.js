import "./styles.css";

import { pickBox } from "./pickBox";
import { drawCompare } from "./drawCompare";
import { drawDetail } from "./drawDetail";

let cities = ["", ""];
let choice = "compare";

pickBox();

const location_A = document.getElementById("location_A");
const location_B = document.getElementById("location_B");
const submit_A = document.getElementById("button_A");
const submit_B = document.getElementById("button_B");

const hero_compare = document.getElementById("compare");
const hero_detail = document.getElementById("detail");

let city_A = {days: [], hours: [], valid: false}
let city_B = {days: [], hours: [], valid: false}

submit_A.addEventListener("click", () => {
    cities[0] = location_A.value;
    console.log(cities);
    city_A = {days: [], hours: [], valid: false}
    let response = getData(cities[0], city_A);
    response.then(response => {
        if (choice === "compare") {
            drawCompare(city_A, city_B);
        } else if (choice === "detail") {
            drawDetail(city_A, city_B);
        }
    })
})

submit_B.addEventListener("click", () => {
    cities[1] = location_B.value;
    console.log(cities);
    city_B = {days: [], hours: [], valid: false}
    let response = getData(cities[1], city_B);
    response.then(response => {
        if (choice === "compare") {
            drawCompare(city_A, city_B);
        } else if (choice === "detail") {
            drawDetail(city_A, city_B);
        }
    })
})

hero_compare.addEventListener("click", () => {
    if (choice === "detail") {
        drawCompare(city_A, city_B);
    }
    choice = "compare";
})

hero_detail.addEventListener("click", () => {
    if (choice === "compare") {
        drawDetail(city_A, city_B);
    }
    choice = "detail";
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
        cityObj.temp = data.days[0].temp;
        cityObj.tempmax = data.days[0].tempmax;
        cityObj.tempmin = data.days[0].tempmin;
        cityObj.humidity = data.days[0].humidity;
        for (let i = 0; i < 7; i++) {
            cityObj.days.push({conditions: data.days[i].conditions, datetime: data.days[i].datetime, icon: data.days[i].icon, temp: data.days[i].temp, description: data.days[i].description});
        }
        for (let j = 0; j < 24; j++) {
            cityObj.hours.push({temp: data.days[0].hours[j].temp, description: data.days[0].hours[j].conditions});
        }
        console.log(cityObj);
        cityObj.valid = true;
    } catch (error) {
        console.log(error)
        alert("Something went wrong")
    }
}