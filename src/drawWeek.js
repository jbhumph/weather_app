import partly_cloudy from "./images/partly_cloudy_day.svg";
import snow from "./images/snow.svg";
import rain from "./images/rain.svg";
import fog from "./images/fog.svg";
import wind from "./images/wind.svg";
import cloud from "./images/cloud.svg";
import partly_cloudy_day from "./images/partly_cloudy_day.svg";
import partly_cloudy_night from "./images/partly_cloudy_night.svg";
import clear_day from "./images/clear_day.svg";
import clear_night from "./images/clear_night.svg";
import error from "./images/error.svg";

export const drawWeek = (location, city) => {
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    for (let i = 0; i < 7; i++) {
        const box = document.createElement('div');
        box.classList.add('week_box');

        const week_icon = document.createElement('div');
        week_icon.classList.add('week_icon');
        const icon = document.createElement('img');
        icon.classList.add('icons');
        if (city.days[i].icon === "rain") {
            icon.src = rain;
        } else if (city.days[i].icon === "snow") {
            icon.src = snow;
        } else if (city.days[i].icon === "fog") {
            icon.src = fog;
        } else if (city.days[i].icon === "wind") {
            icon.src = wind;
        } else if (city.days[i].icon === "cloudy") {
            icon.src = cloud;
        } else if (city.days[i].icon === "partly-cloudy-day") {
            icon.src = partly_cloudy_day;
        } else if (city.days[i].icon === "partly-cloudy-night") {
            icon.src = partly_cloudy_night;
        } else if (city.days[i].icon === "clear-day") {
            icon.src = clear_day;
        } else if (city.days[i].icon === "clear-night") {
            icon.src = clear_night;
        } else {
            icon.src = error;
        }

        week_icon.appendChild(icon);
        box.appendChild(week_icon);

        const week_body = document.createElement('div');
        week_body.classList.add('week_body');
        const week_top = document.createElement('div');
        week_top.classList.add('week_top');
        const week_middle = document.createElement('div');
        week_middle.classList.add('week_middle');
        const week_bottom = document.createElement('div');
        week_bottom.classList.add('week_bottom');
        week_body.appendChild(week_top);
        week_body.appendChild(week_middle);
        week_body.appendChild(week_bottom);
        box.appendChild(week_body);

        const weekday = document.createElement('div');
        weekday.classList.add('weekday');
        const d = new Date(city.days[i].datetime);
        weekday.innerHTML = weekdays[d.getUTCDay()];
        week_top.appendChild(weekday);
        const date = document.createElement('div');
        date.classList.add('display_date');
        date.innerHTML = `${city.days[i].datetime}`;
        week_top.appendChild(date);

        const temp = document.createElement('div');
        temp.classList.add('temp');
        temp.innerHTML = `${city.days[i].temp}°`;
        week_middle.appendChild(temp);
        const condition = document.createElement('div');
        condition.classList.add('condition');
        condition.innerHTML = city.days[i].conditions;
        week_middle.appendChild(condition);

        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = city.days[i].description;
        week_bottom.appendChild(description);




        location.appendChild(box);
    }


}