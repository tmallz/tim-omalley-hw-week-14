const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
const login = () => {
  document.location.replace('/login');
}

const home = () =>{
  document.location.replace('/');
}

const dashboard = () =>{
  document.location.replace('/dashboard');
} 

document.querySelector("#homeBtn").addEventListener('click', home)
document.querySelector('#logOutBtn').addEventListener('click', logout);
document.querySelector('#loginBtn').addEventListener('click', login);
document.querySelector('#dashboardBtn').addEventListener('click', dashboard);