// const USERNAME = "abc"
// const PASSWORD = "123456"
// const DATA = [
//     {
//         username: "user1",
//         password: "123123"
//     },
//     {
//         username: "user2",
//         password: "123123"
//     }
// ]

// localStorage.setItem("wa06_data",JSON.stringify(DATA))

console.log("hello")
function getId(id){
    return document.getElementById(id)
}

getId("submit-button").addEventListener("click", sumbitlogin)

function sumbitlogin() {
    let username = getId("username-input").value
    let password = getId("password-input").value
    
    let data = localStorage.getItem("wa06_data")
    console.log(data)
    // let message = ""

    // if(username.trim() != USERNAME) {
    //     message = "Tài khoản đ có"
    // } else if(password != PASSWORD) {
    //     message = "Mk đ dúng"
    // } else {
    //     alert("đúng mẹ r")
    // }
    // let reponse = findAccount(username, password)

    // if(Response.success == true) {
    //     getId("error-mess").innerText = ""
    //     alert(response.message)
    // }else {
    //     getId("error-mess").innerText = reponse.message
    // }
}

function findAccount(username, password) {
    for (let item of DATA) {
        if (item.username == username) {
            if (item.password == password){
                return{success: true, message: "Vào r con đ"}
            }else {
                return {success: false, message: "mk nhu l"}
            }
        }
    }
    return {success: false, message: "Tk nhu lol đ có"}
}