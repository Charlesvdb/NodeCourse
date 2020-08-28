// const fs = require("fs")

// // fs.writeFileSync("notes.txt","My name is Charles")

// fs.appendFileSync("notes.txt","Adding this line to the core")

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)