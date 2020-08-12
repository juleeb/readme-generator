var fs = require("fs");
var inquirer = require("inquirer");

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
    }
]).then(function(data) {
    fs.writeFile("readme.md", JSON.stringify(data, null, '\n'), function(err) {
        if (err) {
            throw err;
        };

        console.log("success");
    })
})
