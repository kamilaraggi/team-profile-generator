const fs = require ('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Enginner = require('./lib/Enginner');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const outPut = path.join("team.html");

function questions (){
  inquirer
  .prompt([
    {
    type: "input",
    message: "whats your name?",
    name:"name",
    },
    {
      type:"input",
      message: "what you employee ID?",
      name:"id",
    },
    {
      type:"input",
      message:"Whats your E-mail Address?",
      name:"email",
    },
    {
      type:"list"
      message:"Whats their role?",
      choices: ["Manager", "Enginner", "Intern"],
      name:"role",
    },
  ]).then(function(answers) {
   if(answers.role === "Manager") {
     phone(answers);
   } else if (answers.role === "Enginner") {
     git(answers);
   } else {school(answers)};
  })
}


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