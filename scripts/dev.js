const inquirer = require('inquirer');

// 从命令行接收参数
const arguments = process.argv.splice(2);

let libraryName = arguments[0];
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
      console.log(`run for ${libraryName}`);
    });
} else {
  libraryName = libraryName.replace('--', '');
}
