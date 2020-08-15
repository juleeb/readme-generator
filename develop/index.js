//modules list
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generate = require("./generateMarkdown");

//create required criterias for README
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
        type: "input",
        default: "run script - npm run test"
    },
    {
        message: "Please choose license for the application.",
        name: "license",
        type: "list",
        default: "MIT",
        choices: [
            {
                name: "MIT",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "BSD", 
                value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" 
            },
            { 
                name: "Apache License 2.0", 
                value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" 
            }
        ]
    },
    {
        message: "Please provide your Github account name.",
        name: "account",
        type: "input",
        default: "juleeb"
    },
    {
        message: "Please provide your email address for further questions by users.",
        name: "email",
        type: "input",
        default: "test@gmail.com"
    }
]

//create function to call axios and to write file on the README.md file
async function init(){
    try {
        const data = await inquirer.prompt(questions)
        var giturl = `https://api.github.com/users/${data.account}`;
        const response = await axios.get(giturl)
        console.log(response)
        const gitinfo = {
            name: response.data.name,
            profile: response.data.html_url
        };

            fs.writeFile("README.md", generate(data, gitinfo), (err) => {
                    if (err) {
                        throw err;
                    };
                    console.log("success");
                });
    }catch(err){
        console.log(err)
    } 
  
}

init()





