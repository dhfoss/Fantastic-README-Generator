// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Table of Contents
*[Description]()
*[Installation]()
*[Usage]()
*[License]()
*[Contributing]()
*[Tests]()
*[Questions]()
### Description\n
${data.description}\n
### Installation
${data.installation}\n
### Usage
${data.usage}\n
### License
${data.license}\n
### Contributing
${data.contributing}\n
### Tests
${data.tests}\n
### Questions
For questions contact me at:\n
Email: ${data.email}\n
https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
