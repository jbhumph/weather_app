import { drawWeek } from './drawWeek';
import {  } from "leaflet"

export const drawDetail = (cityA, cityB) => {
    let city = cityA;

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const detail = document.createElement('div');
    detail.classList.add('detail_view');
    content.appendChild(detail);

    // week view
    const locationA = document.createElement('div');
    locationA.classList.add('location');
    drawWeek(locationA, city);
    detail.appendChild(locationA);

    // details view
    const detail_box = document.createElement('div');
    detail_box.classList.add('detail_box');
    detail.appendChild(detail_box);

    const detail_boxes = document.createElement('div');
    detail_boxes.classList.add('detail_boxes');
    detail_box.appendChild(detail_boxes);


        // city stats
    const city_stats = document.createElement('div');
    city_stats.classList.add('city_stats');
    detail_boxes.appendChild(city_stats);

    const city_title = document.createElement('div');
    city_title.classList.add('city_title');
    let city_name_A = city.resolvedAddress.split(",")
    city_title.innerHTML = city_name_A[0]
    city_stats.appendChild(city_title);

    const city_subtitle = document.createElement('div');
    city_subtitle.classList.add('city_subtitle');
    city_subtitle.innerHTML = city.resolvedAddress;
    city_stats.appendChild(city_subtitle);

    const city_box = document.createElement('div');
    city_box.classList.add('city_box');
    city_stats.appendChild(city_box);

    const city_maxTemp = document.createElement('div');
    city_maxTemp.classList.add('city_maxTemp');
    city_maxTemp.innerHTML = `<span style="font-weight: bold;">High Temp:</span>    ${city.tempmax}`;
    city_box.appendChild(city_maxTemp);

    const city_minTemp = document.createElement('div');
    city_minTemp.classList.add('city_minTemp');
    city_minTemp.innerHTML = `<span style="font-weight: bold;">Low Temp:</span>    ${city.tempmin}`;
    city_box.appendChild(city_minTemp);

    const city_humidity = document.createElement('div');
    city_humidity.classList.add('city_humidity');
    city_humidity.innerHTML = `<span style="font-weight: bold;">Humidity:</span>    ${city.humidity}`;
    city_box.appendChild(city_humidity);

    const compare_box = document.createElement('div');
    compare_box.classList.add('compare_box');
    city_box.appendChild(compare_box);

    const compare_title = document.createElement('div');
    compare_title.classList.add('compare_title');
    compare_title.innerHTML = "City Comparison";
    compare_box.appendChild(compare_title);

    let avg_avg = "NA"
    let avg_high = "NA"
    let avg_low = "NA"
    let avg_humidity = "NA"

    if (cityA.valid && cityB.valid) {
        avg_avg = cityA.temp + cityB.temp / 2;
        avg_high = cityA.tempmax + cityB.tempmax / 2;
        avg_low = cityA.tempmin + cityB.tempmin / 2;
        avg_humidity = cityB.humidity + cityB.humidity / 2;
    }

    const compare_avgTemp = document.createElement('div');
    compare_avgTemp.classList.add('compare_avgTemp');
    compare_avgTemp.innerHTML = `Avg Temp: ${avg_avg}`;
    compare_box.appendChild(compare_avgTemp);

    const compare_avgHiTemp = document.createElement('div');
    compare_avgHiTemp.classList.add('compare_avgHiTemp');
    compare_avgHiTemp.innerHTML = `Hi Temp: ${avg_high}`;
    compare_box.appendChild(compare_avgHiTemp);

    const compare_avgLoTemp = document.createElement('div');
    compare_avgLoTemp.classList.add('compare_avg_LoTemp');
    compare_avgLoTemp.innerHTML = `Lo Temp: ${avg_low}`;
    compare_box.appendChild(compare_avgLoTemp);

    const compare_avgHumidity = document.createElement('div');
    compare_avgHumidity.classList.add('compare_avgHumidity');
    compare_avgHumidity.innerHTML = `Humidity: ${avg_humidity}`;
    compare_box.appendChild(compare_avgHumidity);





        // hourly forecast
    const hourly = document.createElement('div');
    hourly.classList.add('hourly');
    detail_boxes.appendChild(hourly);

    const hourly_title = document.createElement('div');
    hourly_title.classList.add('hourly_title');
    hourly_title.innerHTML = "Forecast";
    hourly.appendChild(hourly_title);

    const hourly_subtitle = document.createElement('div');
    hourly_subtitle.classList.add('hourly_subtitle');
    hourly_subtitle.innerHTML = "Every other hour listed";
    hourly.appendChild(hourly_subtitle);

    const hourly_box = document.createElement('div');
    hourly_box.classList.add('hourly_box');
    hourly.appendChild(hourly_box);

    for (let i = 0; i < 24; i += 2) {
        const hourly_item = document.createElement('div');
        hourly_item.classList.add('hourly_item');

        const hourly_time = document.createElement('div');
        hourly_time.classList.add('hourly_time');
        let hour;
        let switched = "AM";
        if (i === 0) {
            hour = 12;
        } else if (i > 0 && i < 14) {
            hour = i;
        } else if (i >= 7) {
            hour = i - 12;
        }
        if (i > 10) {
            switched = "PM";
        }
        hourly_time.innerHTML = `${hour}  ${switched}`;
        hourly_item.appendChild(hourly_time);

        const hourly_status = document.createElement('div');
        hourly_status.classList.add('hourly_status');
        hourly_status.innerHTML = city.hours[i].description;
        hourly_item.appendChild(hourly_status);

        const hourly_temp = document.createElement('div');
        hourly_temp.classList.add('hourly_temp');
        hourly_temp.innerHTML = city.hours[i].temp;
        hourly_item.appendChild(hourly_temp);

        hourly_box.appendChild(hourly_item);
    }

        // map area
    const map_area = document.createElement('div');
    map_area.classList.add('map_area');
    detail_box.appendChild(map_area);

    const map_large  = document.createElement('div');
    map_large.classList.add('map_large');
    map_large.setAttribute('id', 'map_large');
    map_area.appendChild(map_large);

    let map = L.map('map_large').setView([city.latitude, city.longitude], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);



    // next view
}