var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  method1() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      { title: this.options.title }
    );
  }
};
