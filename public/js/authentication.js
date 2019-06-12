$("#btn-login").click (() => {
    login($("#input-username").val().trim(), $("#input-password").val().trim());
})

login = async (username, password) => { 
    try {
        const loginResponse = await axios({
            method: 'post',
            url: 'http://localhost:3009/api/v1/login',
            data: {
              username,
              password
            }
        });
        console.log("Login successfull!");
    } catch(e) {
        alert(e.response.data.messages);
    }
    
}