const fs = require ('fs');
const inquirer = require ('inquirer');
const Employee = require('./lib/Employee');
const Enginner = require ('./lib/Enginner');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');

const Render = require('./lib/render-page.js');
const roleArr = []

function questions(){
  console.log("///////////   Start build your team !!!     ///////////")
  inquirer
  .prompt([
    {
    type: "input",
    message: "Whats the name of the employee?",
    name:"name",
    },
    {
      type:"input",
      message: "whats employee ID?",
      name:"id",
    },
    {
      type:"input",
      message:"Whats their E-mail Address?",
      name:"email",
    },
    {
      type:"list",
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


function phone(generalAnswers){
  inquirer
  .prompt([
    {
      type:"input",
      massage:"Enter their Phone Number:",
      name:"Phone",
    },
    {
      type:"confirm",
      message:"All set for this one! Do you wanna add another team member?",
      name:"add",
    }
  ]).then(function (answers){
    const newManager = new Manager(generalAnswers.name, generalAnswers.id, generalAnswers.email, answers.phone)
    roleArr.push(newManager);
    if ( answers.add === true){
      questions()
    } else {
      buildTeam();
      console.log("Your Team has been completed!")
    }
  })
}

function git(generalAnswers){
  inquirer
  .prompt([
    {
      type:"input",
      massage:"Enter their Github username:",
      name:"Git",
    },
    {
      type:"confirm",
      message:"All set for this one! Do you wanna add another team member?",
      name:"add",
    }
  ]).then(function (answers){
    const newEnginner = new Enginner(generalAnswers.name, generalAnswers.id, generalAnswers.email, answers.git)
    roleArr.push(newEnginner);
    if ( answers.add === true){
      questions()
    } else {
      buildTeam();
      console.log("Your Team has been completed!")
    }
  })
}

function school(generalAnswers){
  inquirer
  .prompt([
    {
      type:"input",
      massage:"Enter their School:",
      name:"School",
    },
    {
      type:"confirm",
      message:"All set for this one! Do you wanna add another team member?",
      name:"add",
    }
  ]).then(function (answers){
    const newIntern = new Intern (generalAnswers.name, generalAnswers.id, generalAnswers.email, answers.school)
    roleArr.push(newIntern);
    if ( answers.add === true){
      questions()
    } else {
      buildTeam();
      console.log("Your Team has been completed!")
    }
  })
}

function buildTeam(){
fs.writeFileSync('./dist/index.html', Render(roleArr),"utf-8");
}
//generateHtml (fileName, data){
  //  fs.writeFile(fileName, (data), (err) => {
  //      if (err) {
  //      return console.log(err);
  //  
  //  }
  //
  //    console.log("Success! Your team is done.");
  //
  // });
    
   // function init(){
     //   inquirer.prompt(questions)
       // .then(function (userInput){
         // console.log(userInput)
         //writeToFile("index.html", generateHtml(userInput));
       // });
     // };
      
//}



questions();