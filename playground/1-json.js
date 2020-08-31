const fs = require("fs")

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json",bookJSON)

// const databuffer = fs.readFileSync("1-json.json")
// const dataJSON = databuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(databuffer)
// console.log(dataJSON)
// console.log(data)
// console.log(data.title)

const databuffer = fs.readFileSync("1-json.json")
const dataJSON = databuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Gunther"
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync("1-json.json",userJSON)








