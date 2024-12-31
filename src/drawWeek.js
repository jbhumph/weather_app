import partly_cloudy from "./images/partly_cloudy_day.svg";

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
        icon.src = partly_cloudy;
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
        date.innerHTML = `${months[d.getUTCMonth()]} ${months[d.getUTCDate()]}`;
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