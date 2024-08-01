const login = () => {
    fetch(`${window.location.href}login/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            login: true
        })
    })
    .then(res => {
        if(res.ok){
            $('#login').text("Succesful")
            return res.json()
        }else{
            console.log(res)
            $('#login').text("Failed")
        }
    }).then(data => {
        console.log(data)
    })
}