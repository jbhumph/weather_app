import { drawWeek } from './drawWeek';
import { drawMap } from "./drawMap";

export const drawCompare = (cityA, cityB) => {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const compare = document.createElement('div');
    compare.classList.add('compare_view');
    content.appendChild(compare);

    // location A
    const locationA = document.createElement('div');
    locationA.classList.add('location');
    if (cityA.valid) {
        drawWeek(locationA, cityA);
        compare.appendChild(locationA);
    }


    // maps
    const data = document.createElement('div');
    data.classList.add('data');
    drawMap(data, cityA, cityB);
    compare.appendChild(data);


    // location B
    const locationB = document.createElement('div');
    locationB.classList.add('location');
    if (cityB.valid) {
        drawWeek(locationB, cityB);
        compare.appendChild(locationB);
    }

    console.log(cityA.latitude);
    console.log(cityB.latitude);

    if (cityA.valid) {
        let map = L.map('mapA').setView([cityA.latitude, cityA.longitude], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }

    if (cityB.valid) {
        let mapB = L.map('mapB').setView([cityB.latitude, cityB.longitude], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapB);
    }
}