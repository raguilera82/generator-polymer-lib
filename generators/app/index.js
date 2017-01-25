'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the epic ' + chalk.red('generator-polymer-lib') + ' generator!'
    ));

    done();
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.directory(
      this.templatePath('lib'),
      this.destinationPath('lib')
    );
    this.directory(
      this.templatePath('dist'),
      this.destinationPath('dist')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
