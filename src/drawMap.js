import {  } from "leaflet"

export const drawMap = (location, city_A, city_B) => {
    if (city_A.valid) {
        const spotA = document.createElement('div');
        spotA.classList.add('spot');
        const locA = document.createElement('div');
        locA.classList.add('locA');
        const cityA = document.createElement('div');
        cityA.classList.add('city');
        let city_name_A = city_A.resolvedAddress.split(",")
        cityA.innerHTML = city_name_A[0]
        const fullCityA = document.createElement('div');
        fullCityA.classList.add('fullCity');
        fullCityA.innerHTML = city_A.resolvedAddress;

        const mapA = document.createElement('div');
        mapA.classList.add('map');
        mapA.setAttribute('id', 'mapA');

        locA.appendChild(cityA);
        locA.appendChild(fullCityA);
        locA.appendChild(mapA);
        spotA.appendChild(locA);
        location.appendChild(spotA);
    }

    if (city_B.valid) {
        const spotB = document.createElement('div');
        spotB.classList.add('spot');
        const locB = document.createElement('div');
        locB.classList.add('locB');
        const cityB = document.createElement('div');
        cityB.classList.add('city');
        let city_name_B = city_B.resolvedAddress.split(",")
        cityB.innerHTML = city_name_B[0]
        cityB.setAttribute('id', 'cityB');
        const fullCityB = document.createElement('div');
        fullCityB.classList.add('fullCity');
        fullCityB.innerHTML = city_B.resolvedAddress;
        fullCityB.setAttribute('id', 'cityB');

        const mapB = document.createElement('div');
        mapB.classList.add('map');
        mapB.setAttribute('id', 'mapB');

        locB.appendChild(cityB);
        locB.appendChild(fullCityB);
        locB.appendChild(mapB);
        spotB.appendChild(locB);
        location.appendChild(spotB);
    }
}