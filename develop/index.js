const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./generateMarkdown");
const axios = require("axios");

inquirer.prompt([
    {
        message: "Please provide title of the project.", 
        name: "title", 
        type: "input"
    },
    {
        message: "Please provide description of the project.",
        name: "description",
        type: "input"
    },
    {
        message: "Please provide installation intructions.", 
        name: "installation", 
        type: "input"
    },
    {
        message: "Please provide usage of the application.", 
        name: "usage", 
        type: "input"
    },
    {
        message: "Please provide contribution guidelines.", 
        name: "contributions", 
        type: "input"
    },
    {
        message: "Please provide test instructions.",
        name: "test",
        type: "input"
    },
    {
        message: "Please choose license for the application.",
        name: "license",
        type: "list",
        choices: [
            "MIT",
            "GPL",
            "BSD",
            "Apache License 2.0"
        ]
    }, 
    {
    message: "Please provide your Github account name.",
    name: "accout",
    type: "input"
    }, 
    {
    message: "Please provide your email address for further questions by users.",
    name: "email",
    type: "input"
    }
])
.then(function(data) {
    const url = `https://api.github.com/users/${data.account}`;
    axios.get(url).then(function(response) {
        const git = {
            repo: data.response.url,
            name: data.response.login
        };
        
    fs.writeFile("readme.md", generate(data, git), function(err) {
        if (err) {
            throw err;
        };
        console.log("success");
    })
    })
})

