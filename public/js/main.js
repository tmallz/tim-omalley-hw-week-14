const homeButtonHandler = () => {
    document.location.replace('/');
}

const dashButtonHandler = () => {
    document.location.replace('/dashboard');
}

const homeButtonHandlerMobile = () => {
    document.location.replace('/');
}

const dashButtonHandlerMObile = () => {
    document.location.replace('/dashboard');
}

document.querySelector('#dashboardBtn').addEventListener('click', dashButtonHandler);
document.querySelector('#homeBtn').addEventListener('click', homeButtonHandler);
document.querySelector('#dashboardBtnMobile').addEventListener('click', dashButtonHandlerMObile);
document.querySelector('#homeBtnMobile').addEventListener('click', homeButtonHandlerMobile);