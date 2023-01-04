// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    return `- [License](#license)`
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License
    ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
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
    ${data.installation}inde

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

