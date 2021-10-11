
const fs = require('fs');
const path = require('path');
const Employee = require('./Employee');

const distDir = path.resolve(__dirname, "../dist");

const Render = profiles => {
    const html =[];

    html.push(...profiles
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => profileManager(manager))
        );

        html.push(...profiles
            .filter(employee => employee.getRole() === "Enginner")
            .map(enginner => profileEnginner(enginner))
            );

            html.push(...profiles
                .filter(employee => employee.getRole() === "Intern")
                .map(intern => profileIntern(intern))
                );

      return renderProfiles(html.join(""));          
};

  const profileManager = manager => {
   let template 
};

const profileEnginner = enginner => {
    fs.writeToFile("index.html", html);
    let html = `
    <div class="cards">
            <div class="employee">

                <h2> ${data.name} </h2>
                <h3> ${data.id}</h3>
                <h3> ${data.email}</h3>
                <h3> ${data.github}</h3>

            </div>
          </div>`;
}
