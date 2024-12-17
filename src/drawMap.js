import {  } from "leaflet"

export const drawMap = (location) => {
    const spotA = document.createElement('div');
    spotA.classList.add('spot');
    const locA = document.createElement('div');
    locA.classList.add('locA');
    const cityA = document.createElement('div');
    cityA.classList.add('city');
    cityA.innerHTML = "New York"
    const fullCityA = document.createElement('div');
    fullCityA.classList.add('fullCity');
    fullCityA.innerHTML = "New York, NY United States"

    const mapA  = document.createElement('div');
    mapA.classList.add('map');
    mapA.setAttribute('id', 'mapA');

    locA.appendChild(cityA);
    locA.appendChild(fullCityA);
    locA.appendChild(mapA);
    spotA.appendChild(locA);
    location.appendChild(spotA);



    const spotB = document.createElement('div');
    spotB.classList.add('spot');
    const locB = document.createElement('div');
    locB.classList.add('locB');
    const cityB = document.createElement('div');
    cityB.classList.add('city');
    cityB.innerHTML = "New York"
    cityB.setAttribute('id', 'cityB');
    const fullCityB = document.createElement('div');
    fullCityB.classList.add('fullCity');
    fullCityB.innerHTML = "New York, NY United States"
    fullCityB.setAttribute('id', 'cityB');

    const mapB  = document.createElement('div');
    mapB.classList.add('map');
    mapB.setAttribute('id', 'mapB');

    locB.appendChild(cityB);
    locB.appendChild(fullCityB);
    locB.appendChild(mapB);
    spotB.appendChild(locB);
    location.appendChild(spotB);
}