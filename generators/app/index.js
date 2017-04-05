var Generator = require('yeoman-generator');
var path = require('path');

module.exports = class extends Generator {
  prompting() {
    if(this.option('headless')) {
      this.answers = {
        title: 'FB Stack',
        graphql: true
      }
      return;
    }
    return this.prompt([{
      type: 'input',
      name: 'title',
      message: 'The title of your website.',
      default: 'FB Stack' // Default to current folder name
    }, {
      type: 'confirm',
      name: 'graphql',
      message: 'Create graphl endpoint',
      default: true
    }]).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    this.composeWith(path.join(__dirname, '../html-page/index.js'), {title: this.answers.title});
  }
}
