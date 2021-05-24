const homeButtonHandler = () => {

}

const dashButtonHandler = () => {
    document.location.replace('/dashboard');
}

document.querySelector('#dashboardBtn').addEventListener('click', dashButtonHandler);