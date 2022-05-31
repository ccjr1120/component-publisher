const inquirer = require('inquirer');
const shell = require('shelljs');

function buildPropject(libraryName) {
  const scriptName = `${libraryName}.config.js`;
  shell
    .exec(
      `webpack serve --color --progress --mode development --config ./webpack-config/${scriptName}`,
    )
    .stdout();
}

let libraryName = process.argv.splice(2)[0];
if (!libraryName) {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select library',
        name: 'libraryName',
        choices: ['vue', 'react'],
      },
    ])
    .then((answers) => {
      libraryName = answers.libraryName;
      if (libraryName !== 'vue' && libraryName !== 'react') {
        return;
      }
      buildPropject(libraryName);
    });
} else {
  libraryName = libraryName.replace('--', '');
  buildPropject(libraryName);
}
