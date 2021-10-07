const Employee = require('./Employee');

class Enginner extends Enginner {
 constructor(name, id, email, github) {
     super(name, id, email);
     this.github = github;

 }

 getRole(){
     return 'Enginner'
 }

 getGithub(){
  return this.github
 }

}
module.exports = Enginner;