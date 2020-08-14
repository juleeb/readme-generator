const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./generateMarkdown");
const axios = require("axios");
questions = [
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
]

inquirer
    .prompt(questions)

    .then(function(data) {
        var user = data.user
        console.log(user);
        var giturl = "https://api.github.com/users/" + user;
        axios
        .get(giturl)
        .then(function(response) {
            console.log(response);

    fs.writeFile("README.md", generate(questions), function(err) {
        if (err) {
            throw err;
        };
        console.log("success");
    
    });
    });
});