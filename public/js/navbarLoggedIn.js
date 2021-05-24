const logOutNavBtnHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
} 


document.querySelector("#logOutNavBtn").addEventListener('click', logOutNavBtnHandler);