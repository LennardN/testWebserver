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
    if(!$('#searchinput').val()) return

    fetch(`${window.location.href}search/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            search: $("#searchinput").val(),
        })
    }).then(res => {
        if(res.ok){
            return res.json()
        }
    }).then(data => {
        $('#tablebody').empty()
        for(let i = 0; i < data.length; i++){
            console.log("userid:", data[i].id)
            $('#tablebody').append(`<tr><td>${data[i].first_name}</td><td>${data[i].last_name}</td><td>${data[i].gender}</td></tr>`);
        }
    })
}