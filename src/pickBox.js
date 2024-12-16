import info from "./images/info.svg";

export const pickBox = () => {

    const content = document.querySelector('.content');
    content.innerHTML = "";

    const pick_box = document.createElement('div')
    pick_box.classList.add('pick_box')

    const pick_icon = document.createElement('div')
    pick_icon.classList.add('pick_icon')
    const icon = document.createElement('img')
    icon.src = info;
    pick_icon.appendChild(icon);

    const pick_text = document.createElement('div')
    pick_text.classList.add('pick_text')
    pick_text.innerText = "Please pick a display mode above and then enter some city names to get started!";

    pick_box.appendChild(pick_icon);
    pick_box.appendChild(pick_text);
    content.appendChild(pick_box);
}
