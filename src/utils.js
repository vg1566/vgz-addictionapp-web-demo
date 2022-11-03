const setTitleColor = (color = localStorage.getItem('vgz-addapp-titlecolor')) => {
    const titleElement = document.querySelector('h1');
    titleElement.classList.remove(localStorage.getItem('vgz-addapp-titlecolor'));
    localStorage.setItem('vgz-addapp-titlecolor', color);
    titleElement.classList.add(color);
}

const setAllShopSettings = () => {
    setTitleColor();
}

const addPoints = (num) => {
    console.log(Math.floor(num));
    localStorage.setItem('vgz-addapp-shoppoints', Math.floor(localStorage.getItem('vgz-addapp-shoppoints')) + Math.floor(num));
}

const numRepetitions = {
    stroop: 10,
    balloon: 10,
    stop: 30
}

export {
    setTitleColor,
    setAllShopSettings,
    addPoints,
    numRepetitions
};