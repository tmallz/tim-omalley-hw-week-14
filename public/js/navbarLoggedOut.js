const loginNavBtnHandler = () => {
    document.location.replace('/login');
}

const loginNavBtnHandlerMobile = () => {
    document.location.replace('/login');
}

document.querySelector("#loginNavBtn").addEventListener('click', loginNavBtnHandler);
document.querySelector("#loginNavBtn").addEventListener('click', loginNavBtnHandlerMobile);
