const newPostHandler = () => {
    document.location.replace('/dashboard/create')
  }

document.querySelector('#newPostBtn').addEventListener('click', newPostHandler);
