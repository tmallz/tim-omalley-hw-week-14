const signupFormHandler  = async (event) => {
    console.log('here:)');
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log(username, email, password);
  
    if (username && email && password) {
      const response = await fetch('/api/users/signUp', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};

const loginPageLoader =  () =>{
    document.location.replace('/login');
  }

document.querySelector('#signUpBtn').addEventListener('click', signupFormHandler); 

document.querySelector('#loginPageBtn').addEventListener('click', loginPageLoader);