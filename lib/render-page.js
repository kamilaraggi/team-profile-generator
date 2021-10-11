
const fs = require('fs');
const path = require('path');
const Employee = require('./Employee');

const distDir = path.resolve(__dirname, "../dist");

const render = profiles => {
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
     let template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
     template = replacePlaceholder(template, "name", manager.getName());
     template = replacePlaceholder(template, "role", manager.getRole());
     template = replacePlaceholder(template, "id", manager.getId());
     template = replacePlaceholder(template, "email", manager.getEmail());
     template = replacePlaceholder(template, "officenumber", manager.getOfficenumber());
     return template;
 };

 const profileEnginner = enginner => {
    let template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
    template = replacePlaceholder(template, "name", enginner.getName());
    template = replacePlaceholder(template, "role", enginner.getRole());
    template = replacePlaceholder(template, "id", enginner.getId());
    template = replacePlaceholder(template, "email", enginner.getEmail());
    template = replacePlaceholder(template, "github", enginner.getGithub());
    return template;
};

const profileIntern = intern => {
    let template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
    template = replacePlaceholder(template, "name", intern.getName());
    template = replacePlaceholder(template, "role", intern.getRole());
    template = replacePlaceholder(template, "id", intern.getId());
    template = replacePlaceholder(template, "email", intern.getEmail());
    template = replacePlaceholder(template, "school", intern.getSchool());
    return template;
};

const renderProfiles = html => {
   const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
   return replacePlaceholder(template, "index", html);
};

const replacePlaceholder = (template, placeholder, value) =>{
    const pattern = new RegExp("{{" +placeholder+"}}", "gm");
    return template.replace(pattern, value);

};
module.exports = render