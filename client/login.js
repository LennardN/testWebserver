const register = () => {
    if(!$('#firstname').val()) return
    if(!$('#lastname').val()) return

    fetch(`${window.location.href}register/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            gender: $("#gender").val(),
        })
    }).then(res => {
        if(res.ok){
            window.alert("Succesful")
        }
    })
}
const search = () => {
    if(!$('#lastname').val()) return

    fetch(`${window.location.href}search/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            gender: $("#gender").val(),
        })
    }).then(res => {
        if(res.ok){
            return res.json()
        }
    }).then(data => {
        console.log(data)
    })
}