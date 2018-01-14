## Intellisense for VSCode
Go to the root of the directory. 
        
    Ctrl + Alt + O (Open in terminal)

Enable Intellisense

    npm install typings --global 
    typings init
    typings search three
    typings install three --save --global
    typings install dt~three --save --global 
    
## Create [jsconfig.json](../jsconfig.json) file for projects. 
    Presense of jsconfig.json indicates the project is root of a Javascript project. 
    Intellisense will work based on this. 

    Place this file at the root of your project.

## Linters : 
javascript : ESLint 

    npm install -g eslint
    intall the ESLint extension : Cmd + Shift + X
    eslint --init

A file by the name [.eslintrc.js](../.eslintrc.js) should be availabe at the root of the project. 

## Enable Reference Codelens ([settings.json](./settings.json))
Cmd + Shift + P, Search for 'Open User Settings '
    or
    (Cmd + ,)

    "javascript.referencesCodeLens.enabled": true,

## [Keyboard Shortcuts - Visual Studio](./vscode_tour/KeyboardShortCuts.md)

## Install FiraCode and enable font-ligatures
Open the User Settings (Cmd + ,) and look for the following properties, and set them to these values. 

    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true
