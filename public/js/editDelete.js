const deletePostHandler = async (event) =>{
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const confirm = window.confirm("Permanently delete post?");
    if(confirm){
        const res = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({id}),
            headers: {'Content-Type': 'application/json'},
        });

        if(res.ok){
            document.location.replace('/dashboard');
        }else{
            alert(res.statusText);
        }
    }
    else{
        document.location.reload();
    }
}

const editPostHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const title = document.querySelector('#updatedTitle').value;
    const body = document.querySelector('#updatedBody').value;

    const res = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.ok){
        document.location.replace(`/post/${id}`);
    }else {
        alert(res.statusText);
    }
}

document.querySelector('#deletePostBtn').addEventListener('click', deletePostHandler);
document.querySelector('#editPostBtn').addEventListener('click', editPostHandler);