const setTitleColor = (color = localStorage.getItem('vgz-addapp-titlecolor')) => {
    const titleElement = document.querySelector('h1');
    titleElement.classList.remove(localStorage.getItem('vgz-addapp-titlecolor'));
    localStorage.setItem('vgz-addapp-titlecolor', color);
    titleElement.classList.add(color);
}

export {setTitleColor};