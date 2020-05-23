
<h1 align="center">Team Profile Generator Using Node.js and Object-Oriented Programming (OOP) and Test-Driven Development (TDD) 👋</h1>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/jpd61/team-profile-generator" />
    <img src="https://img.shields.io/github/languages/top/jpd61/team-profile-generator"  />
    <img src="https://img.shields.io/github/issues/jpd61/team-profile-generator" />
    <img src="https://img.shields.io/github/last-commit/jpd61/team-profile-generator" >
    <a href="https://twitter.com/jpdewoody">
        <img alt="Twitter: jpdewoody" src="https://img.shields.io/twitter/follow/jpdewoody.svg?style=social" target="_blank" />
    </a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
</p>
   
## Description

🔍 A node.js application that uses user input from inquirer to populate a index.html file displaying members of a development team. The index.html file is created in the dist directory and can be found [here](.dist/index.html)  
  
💻 Below is the gif showing the functionality of the application:
  
![DeWoody Team Profile Generator](./src/funcionality-gif.gif)
  
🎥 The full movie file showing functionality of the application can be found [here](./src/functionality-video.webm)  
  
## User Story
  
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
  
## Acceptance Criteria
  
``` 
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee id, email address, and office number
WHEN I enter the team manager’s name, employee id, email address, and office number
THEN I am presented with a menu with the option to add an engineer, an intern, or finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, id, email, and GitHub username and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, id, email, and school and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application and the HTML is generated
```
  
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💾   
  
`npm init`
  
`npm install inquirer`

`npm install email-validator`

`npm install jest --save-dev`
  
## Usage
💻   
  
Run the following command at th root of your project and answer the prompted questions:
  
`node Index`

## Testing
✏️

`npm install jest --save-dev`

Testing is done with jest and contains testing for all four Classes: Employee, Manager, Engineer and Intern.

## Contributing
:octocat: [Joseph DeWoody](https://github.com/jpd61)

## Questions
✉️ Contact me with any questions: [email](mailto:jpd@dewoodyoil.com) , [GitHub](https://github.com/jpd61)<br />
