const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

// add, remove, read and list
// 1. Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv){
        notes.addNote(argv.title,argv.body)
    }
})

// 2. Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
        console.log("Removing the note!")
    }
})

// 3. Create list command
yargs.command({
    command: "list",
    describe: "list your notes",
    handler: function (){
        console.log("Listing out all notes!")
    }
})

// 4. Create read command
yargs.command({
    command: "read",
    describe: "read a note",
    handler: function (){
        console.log("Reading a note!")
    }
})

console.log(process.argv)
console.log(yargs.argv)