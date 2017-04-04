var Generator = require('yeoman-generator');

module.exports = Generator.extend({
  method1: function() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      { title: "FB Stack" }
    );
  }
});
