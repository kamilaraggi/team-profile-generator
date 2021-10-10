const fs = require ('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Enginner = require('./lib/Enginner');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

generateHtml (fileName, data){
    fs.writeFile(fileName, (data), (err) => {
        if (err) {
          return console.log(err);
      
        }
  
        console.log("Success! Your team is done.");
      
    });
    
    function init(){
        inquirer.prompt(questions)
        .then(function (userInput){
          console.log(userInput)
         writeToFile("index.html", generateHtml(userInput));
        });
      };
      
}