var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  method1() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { title: this.options.title }
    );
      this.fs.copyTpl(
        this.templatePath('server.js'),
        this.destinationPath('server.js'),
        { title: this.options.title }
      );
    this.npmInstall(['connect', 'serve-static'], { 'save': true });
  }
};
