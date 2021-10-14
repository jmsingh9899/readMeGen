const fs = require('fs');
const inquirer = require('inquirer');


fs.writeFile('README.md', "yolo", ((err) => {
    err ? console.log(err):console.log("Success")
}))