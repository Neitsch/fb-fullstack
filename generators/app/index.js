var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
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
      this.composeWith('fb-fullstack:html-page', {title: answers.title});
    });
  }
}
