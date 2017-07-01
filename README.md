# Phenomic-React-MobX-TypeScript

Minimal boilerplate for a static website using Phenomic, MobX, React and TypeScript with TSX for use with the free Visual Studio Code editor

Initial install:

* `npm install`
* `npm rebuild` (may or may not be required)

To build and host site locally (including hot-reloading):

* In Visual Studio Code Ctrl+Shift+B to regenerate *.js from *.ts and *.tsx
* `npm start` (and then browse to http://localhost:3333)
* Web browswer will automatically hot reload the page as you make code changes to the *.js files or when you hit Ctrl+Shift+B to rebuild the typescript files

To generate uploadable static files into ./dist folder:

* `npm run build`