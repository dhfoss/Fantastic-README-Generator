// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Table of Contents
[Description](https://github.com/${data.github}/${data.title}/#description)  
[Installation](https://github.com/${data.github}/${data.title}/#installation)  
[Usage](https://github.com/${data.github}/${data.title}/#usage)  
[License](https://github.com/${data.github}/${data.title}/#license)  
[Contributing](https://github.com/${data.github}/${data.title}/#contributing)  
[Tests](https://github.com/${data.github}/${data.title}/#tests)  
[Questions](https://github.com/${data.github}/${data.title}/#questions)  
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
