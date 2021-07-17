# Command line password generator

This project utilized NodeJS to create a command line password generator which outputs a randomized password to certain specified settings. Passwords can also be copied to the clipboard and saved into a .txt file.

A general overview of the Javascript code used in the NodeJS app is given below.

First commander.js is imported to help with setting up cmnd line functionality with less code.
```JavaScript
const program = require("commander");
```

Now options are set for the node password program.
```JavaScript
program
  .option("-l, --length <number>", "Length of password", "8")
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();
  ```
  
  Now destructuring is used to retrieve and make availabe the values from the specified options above.
  ```JavaScript
  const { length, save, numbers, symbols } = program.opts();
  ```
  
  Now use those values to create the generatedPassword function which will then cr8 a pw.
  ```JavaScript
  const generatedPassword = createPassword(length, numbers, symbols);
  ```
  
  Now create the createPassword function.
  ```JavaScript
  const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {};
```

Now cr8 the characters that will be used to create the passwords.
```JavaScript
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()";
```

Now finish setting up the createPassword function and import it into index.js.
```JavaScript
const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;

  hasNumbers ? (chars += numbers) : " ";
  hasSymbols ? (chars += symbols) : "";
  return generatePassword(length, chars);
};
```

Now create the generatePassword function. 
```JavaScript
const generatePassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
```

Currently, the output is only a non-descript and unidentified pw. This is improved upon by using the chalk import.
```JavaScript
console.log(chalk.blue("generate password: ") + chalk.bold(generatedPassword));
```

Next the copy to clipboard functionality is added.
```JavaScript
clipboardy.writeSync(generatedPassword);
console.log(chalk.yellow("Password copied to clipboard")
```

Next set up the save option to write a pw into a new .txt file.
```JavaScript
if (save) {
  savePassword(generatedPassword);
}
```

Next create the savePassword function in a new file and import it to index.js. The below code first opens (or creates) the file and .write inserts the pw inside.
```JavaScript
const savePassword = (password) => {
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password saved to passwords.txt"));
      });
    });
  });
};
```

Run using node index
node index -h         to see all options

***End walkthrough






  
  
