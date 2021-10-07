const Employee = require('./lib/Employee');

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