const activeUser = Object.create(null, {
    "get": {
        value: () => JSON.parse(sessionStorage.getItem("ActiveUser"))
    },
    "set": {
        value: user => {
            sessionStorage.setItem("ActiveUser", JSON.stringify({
                "id": user.id,
                "username": user.username,
                "email": user.email
            }))
        }
    },
    "clear": {
        value: () => sessionStorage.removeItem("ActiveUser")
    }
})

module.exports = activeUser
