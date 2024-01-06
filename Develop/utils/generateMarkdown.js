// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  // Update the URL with the correct link to the license
  return `[${license}](https://opensource.org/licenses/${encodeURIComponent(license)})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License

This project is licensed under the ${license} license. For more information see ${renderLicenseLink(license)}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

${data.description}

## Table of Contents
... // Add other sections as necessary

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

... // Add other sections such as Contributing, Tests, and Questions
`;
}

module.exports = generateMarkdown;


