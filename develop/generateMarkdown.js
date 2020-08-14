// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #  **${data.title}**

  ##  Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  ## Description

  ${data.description}

  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Contributors

  ${data.contribution}

  ## Test

  ${data.test}

  ## Repository for ${response.data.login}

  ${response.data.url}

  ## Question

  Any questions please email : ${data.email}

  ## License

  ${data.license}

`;
}

module.exports = generateMarkdown;
