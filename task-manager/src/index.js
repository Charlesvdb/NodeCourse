const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
const { ReplSet } = require("mongodb")

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) => {
//     if(req.method === "GET"){
//         res.send("GET requests are disabled")
//     } else{
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send("Site is currently down. Check back soon!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on", + port )
})

const jwt = require("jsonwebtoken")

const myFunction = async () => {
    const token = jwt.sign({_id:"abc123"},"thisismynewcourse")
    console.log(token)

    const data = jwt.verify(token,"thisismynewcourse")
    console.log(data)
}

myFunction()


////////////////////////////////////////

const pet = {
    name: 'Hal'
}

pet.toJSON = function (){
    console.log(this)
    return this
}

console.log(JSON.stringify(pet))

////////////////////////////////////////

const Task = require("./models/task")
const User = require("./models/user")

const main = async () => {
    //Saved in database
    // const task = await Task.findById("4545454fccc455c554c4c")
    // await task.populate("owner").execPopulate()
    // console.log(task.owner)

    //Not saved in database
    const user = await User.findById("4545454fccc455c554c4c")
    await user.populate("tasks").execPopulate()
    console.log(user.tasks)
}

main()