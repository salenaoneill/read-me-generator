//function that returns a license badge based on which license is passed in
//if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  else {
    return ``;
  }
}

//function that returns the license link
//if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    return `- [License](#license)`
  }
  return ``
}

//function that returns the license section of README
//if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License
    This application is covered under the ${license} license.`
  }
  return ``;
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  - [Contribution](#contribution)
  - [Tests](#Tests)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ${renderLicenseSection(data.license)} 

  ## Contribution 
    ${data.contribution}

  ## Tests
    ${data.tests}

  ## Questions
  If you have any questions, contact me!
  Github: https://github.com/${data.username}
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;

