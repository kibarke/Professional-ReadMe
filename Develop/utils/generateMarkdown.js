// Function to render license badge
function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// Function to render license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license} License](https://opensource.org/licenses/${license}).`;
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Deployed Application URL] (#deployed)
- [Usage](#usage)
- [Tests](#tests)
- [Contributors](#contributors)
- [Screenshot](#screenshot)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Deployed Application URL

${data.link}

## Usage

${data.usage}

## Tests

${data.tests}

## Contributors

${data.contributors}

## Screenshot

![alt-text](${data.screenshot})

## Questions

For questions about the project, you can reach me at [${data.email}](mailto:${data.email}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
