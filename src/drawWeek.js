import partly_cloudy from "./images/partly_cloudy_day.svg";

export const drawWeek = (location) => {

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
        weekday.innerHTML = "Wednesday";
        week_top.appendChild(weekday);
        const date = document.createElement('div');
        date.classList.add('display_date');
        date.innerHTML = "November, 27 2024";
        week_top.appendChild(date);

        const temp = document.createElement('div');
        temp.classList.add('temp');
        temp.innerHTML = "47.3°";
        week_middle.appendChild(temp);
        const condition = document.createElement('div');
        condition.classList.add('condition');
        condition.innerHTML = "Partially Cloudy";
        week_middle.appendChild(condition);

        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = "Becoming cloudy in the afternoon";
        week_bottom.appendChild(description);




        location.appendChild(box);
    }


}