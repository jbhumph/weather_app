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


    // next view
}