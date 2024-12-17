import { drawWeek } from './drawWeek';
import { drawMap } from "./drawMap";

export const drawCompare = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const compare = document.createElement('div');
    compare.classList.add('compare_view');
    content.appendChild(compare);

    // location A
    const locationA = document.createElement('div');
    locationA.classList.add('location');
    drawWeek(locationA);
    compare.appendChild(locationA);


    // maps
    const data = document.createElement('div');
    data.classList.add('data');
    drawMap(data);
    compare.appendChild(data);


    // location B
    const locationB = document.createElement('div');
    locationB.classList.add('location');
    drawWeek(locationB);
    compare.appendChild(locationB);


    let map = L.map('mapA').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let mapB = L.map('mapB').setView([51.525, -0.09], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapB);
}