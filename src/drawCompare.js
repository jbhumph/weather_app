import { drawWeek } from './drawWeek';

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
    data.innerHTML = `asdgvjhgsadjgvj`
    compare.appendChild(data);


    // location B
    const locationB = document.createElement('div');
    locationB.classList.add('location');
    drawWeek(locationB);
    compare.appendChild(locationB);
}