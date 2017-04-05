var Generator = require('yeoman-generator');
var path = require('path');

module.exports = class extends Generator {
  prompting() {
    var questions = [{
      type: 'input',
      name: 'title',
      message: 'The title of your website.',
      default: 'FB Stack' // Default to current folder name
    }, {
      type: 'confirm',
      name: 'graphql',
      message: 'Create graphl endpoint',
      default: true
    }, {
      type: 'confirm',
      name: 'heroku',
      message: 'Create graphl endpoint',
      default: true
    }];
    if(this.option('headless')) {
      this.answers = questions.reduce(function(all, val) {
        all[val.name] = val.default;
        return all;
      }, {});
      return;
    }
    return this.prompt(questions).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    this.composeWith(path.join(__dirname, '../html-page/index.js'), {title: this.answers.title});
    if(this.answers.heroku) {
      this.composeWith(path.join(__dirname, '../heroku/index.js'))
    }
  }
}
