const commentHandler = async (event) => {  
    event.preventDefault();

    const body = document.querySelector('#commentBody').value;
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    if(body){
        const res = await fetch('../../api/comment', {
            method: 'POST',
            body: JSON.stringify({body, post_id}),
            headers: {'Content-Type': 'application/json'},
        });

        if(res.ok){
            document.location.replace(post_id);
        } else {
            alert(res.statusText);
        }
    }
}

document.querySelector('#commentBtn').addEventListener('click', commentHandler);