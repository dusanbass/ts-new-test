**Use the project:**
* ```npm i```
* ```npm run start```

And you can use debugger in VS Code as usual

TS config file was needed:
https://stackoverflow.com/questions/36916989/how-can-i-generate-a-tsconfig-json-file

and do enable source map

Debugger was made like this:
https://stackoverflow.com/questions/31169259/how-to-debug-typescript-files-in-visual-studio-code
*and go to title Auto-configuration approaches*
In my case _Attach debugger to running program_ was not needed

For auto-start and watcher:
* add nodemon (npm i nodemon), and use it like this in separate terminal ```npx nodemon server```
* change package.json as to add --watch to your start ```"start": "tsc index.ts --watch"```
If nodemon starts making troubles: https://stackoverflow.com/questions/35530930/nodemon-not-working-bash-nodemon-command-not-found

**Lightweight tutorial:**
https://www.tutorialspoint.com/typescript/typescript_quick_guide.htm

**Official handbook tutorial:**
https://www.typescriptlang.org/docs/handbook/intro.html

**Online Playground**
https://www.typescriptlang.org/play