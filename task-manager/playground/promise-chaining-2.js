require("../src/models/task")
const Task = require("../src/models/task")

// Task.findByIdAndDelete("454646464646446645353466f4fa445").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("454646464646446645353466f4fa445").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})