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
            $('#register').text("Succesful")
            return res.json()
        }else{
            console.log(res)
            $('#register').text("Failed")
        }
    }).then(data => {
        console.log(data)
        window.alert(data.name);
    })
}