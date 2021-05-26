const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#noteTitle').value;
    const body = document.querySelector('#noteBody').value;

    console.log(title, body);

    if(title && body) {
        const res = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json'}
        });

        if(res.ok){
            document.location.replace('/dashboard');
        } else{
            alert(res.statusText);
        }
    }
}

document.querySelector('#newPostBtn').addEventListener('click', newPostHandler);