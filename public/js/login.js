const loginFormHandler = async (event) => {
  console.log('here');
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signUpPageLoader =  () =>{
  document.location.replace('/signup');
}


document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);
//document.getElementById('loginBtn').addEventListener('submit', loginFormHandler);

document.querySelector('#signUpPageBtn').addEventListener('click', signUpPageLoader);



  



