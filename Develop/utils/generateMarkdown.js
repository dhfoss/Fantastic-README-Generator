// function to generate markdown for README
function generateMarkdown(data) {
  let licenseImage;
  let licenseName;
  if (data.license === "Apache") {
    licenseImage = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    licenseName = "Apache";
  } else if (data.license === "BSD 3-Clause License") {
    licenseImage = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    licenseName = "BSD";
  } else if (data.license === "BSD 2-Clause License") {
    licenseImage = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    licenseName = "BSD";
  } else if (data.license === "IBM") {
    licenseImage = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    licenseName = "IBM";
  } else if (data.license === "MIT") {
    licenseImage = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    licenseName = "MIT";
  } else if (data.license === "Mozilla") {
    licenseImage = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    licenseName = "Mozilla";
  } else if (data.license === "Perl") {
    licenseImage = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    licenseName = "Perl";
  }

  return `# ${data.title}\n
${licenseImage}  
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
This project is licensed under the ${licenseName} License.\n
### Contributing
${data.contributing}\n
### Tests
${data.tests}\n
### Questions
For questions contact me at:  
Email: ${data.email}  
https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
