// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
### Description\n
${data.description}\n
### Installation
${data.installation}\n
### Usage
${data.usage}\n
### License
${data.lisence}\n
### Contributing
${data.contributing}\n
### Tests
${data.tests}\n
### Questions
For questions contact me at:\n
Email: ${data.email}\n
[github.com/${data.github}]
`;
}

module.exports = generateMarkdown;
