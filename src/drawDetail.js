import { drawWeek } from './drawWeek';
import { drawMap } from "./drawMap";

export const drawDetail = draw => {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const detail = document.createElement('div');
    detail.classList.add('detail_view');
    content.appendChild(detail);

    // week view
    const locationA = document.createElement('div');
    locationA.classList.add('location');
    drawWeek(locationA);
    detail.appendChild(locationA);

    // details view
    const detail_box = document.createElement('div');
    detail_box.classList.add('detail_box');

        // city stats
    const city_stats = document.createElement('div');
    city_stats.classList.add('city_stats');

    const city_title = document.createElement('div');
    city_title.classList.add('city_title');
    city_title.innerHTML = "New York"
    city_stats.appendChild(city_title);

    const city_subtitle = document.createElement('div');
    city_subtitle.classList.add('city_subtitle');
    city_subtitle.innerHTML = "New York,NY United States";
    city_stats.appendChild(city_subtitle);

    const city_box = document.createElement('div');
    city_box.classList.add('city_box');
    city_stats.appendChild(city_box);

    const city_maxTemp = document.createElement('div');
    city_maxTemp.classList.add('city_maxTemp');
    city_maxTemp.innerHTML = "High Temp: ";
    city_box.appendChild(city_maxTemp);

    const city_minTemp = document.createElement('div');
    city_minTemp.classList.add('city_minTemp');
    city_minTemp.innerHTML = "Low temp: ";
    city_box.appendChild(city_minTemp);

    const city_humidity = document.createElement('div');
    city_humidity.classList.add('city_humidity');
    city_humidity.innerHTML = "Humidity: ";
    city_box.appendChild(city_humidity);

    const compare_box = document.createElement('div');
    compare_box.classList.add('compare_box');
    city_box.appendChild(compare_box);

    const compare_title = document.createElement('div');
    compare_title.classList.add('compare_title');
    compare_title.innerHTML = "City Comparison";
    compare_box.appendChild(compare_title);

    const compare_avgTemp = document.createElement('div');
    compare_avgTemp.classList.add('compare_avgTemp');
    compare_avgTemp.innerHTML = "Avg Temp: ";
    compare_box.appendChild(compare_avgTemp);

    const compare_avgHiTemp = document.createElement('div');
    compare_avgHiTemp.classList.add('compare_avgHiTemp');
    compare_avgHiTemp.innerHTML = "Hi Temp: ";
    compare_box.appendChild(compare_avgHiTemp);

    const compare_avgLoTemp = document.createElement('div');
    compare_avgLoTemp.classList.add('compare_avg_LoTemp');
    compare_avgLoTemp.innerHTML = "Lo Temp: ";
    compare_box.appendChild(compare_avg_LoTemp);

    const compare_avgHumidity = document.createElement('div');
    compare_avgHumidity.classList.add('compare_avgHumidity');
    compare_avgHumidity.innerHTML = "Humidity: ";
    compare_box.appendChild(compare_avgHumidity);





        // hourly forecast


        // map area

    detail.appendChild(detail_box);

    // next view
}