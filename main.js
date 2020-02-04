const renderer = new Renderer()
const apiManager = new APIManager()

$("#load").on("click", function () {
    apiManager.getInfo()
})

$("#display").on("click", function () {
    renderer.renderAll(apiManager.data)
})

$("#saveUserPage").on("click", function() {
    // let usersArray = []
    // usersArray.push(apiManager.data)
    localStorage.savedUsers = JSON.stringify(apiManager.data)
    $("#dropDown").append(`<p>${apiManager.data.users.mainUser.firstName}</p>`)
})

$("#loadUserPage").on("click", function() {
    const userSaved = JSON.parse(localStorage.savedUsers || "[]")
    renderer.renderAll(userSaved)
})

$(".savedUsers").on("click", function() {
    $("#dropDown").toggle()
})