# Fantastic-README-Generator

## Table of Contents
[Description](https://github.com/dhfoss/Fantastic-README-Generator/#description)  
[Installation](https://github.com/dhfoss/Fantastic-README-Generator/#installation)  
[Usage](https://github.com/dhfoss/Fantastic-README-Generator/#usage)  
[Questions](https://github.com/dhfoss/Fantastic-README-Generator/#questions)

### Description
This is a command line application that dynamically generates a README.md file for a GitHub project using user input gathered with inquirer.js. It automatically formats the file with a title, table of contents (that can be clicked to jump to different sections), and the following sections: Description, Installation, Usage, License, Contributing, Tests, and Questions.  It also includes a license badge, and a link to the user's GitHub page.

### Installation
This app uses inquirer.js.  Run `npm install` to access it.

### Usage
To use the app, run `node index.js` in the command line. This will begin a series of questions about the project that will be filled in to the final README.md document.  
![Init](/Develop/screen-shots/1-init.png?raw=true "Optional Title")

All of the questions are input questions, except for the badge questions, which offers a series of choices. The description and the image of the badge are both displayed in the final README.md document.  
![Badges](/Develop/screen-shots/2-badges.png?raw=true "Optional Title")

If the app works, the user is notified with a message.  
![Success](/Develop/screen-shots/3-success.png?raw=true "Optional Title")

The README.md file is formatted with headers, table of content links, and a link to the user's GitHub.  
![File](/Develop/screen-shots/4-mdfile.png?raw=true "Optional Title")

Here is a screen shot of the file deployed on GitHub.  
![Deployed](/Develop/screen-shots/5-deployed.png?raw=true "Optional Title")

### Questions
For questions contact me at:  
Email: dhfoss89@gmail.com  
https://github.com/dhfoss