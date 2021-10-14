const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./template.js');


fs.writeFile('README.md', template.readME, ((err) => {
    err ? console.log(err):console.log("Success")
}))