require("../src/db/mongoose")
const User = require("../src/models/user")

User.findByIdAndUpdate("5c34434w3434343434343443", {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("5c34434w3434343434343443",2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
