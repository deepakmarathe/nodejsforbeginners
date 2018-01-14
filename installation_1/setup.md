## Install 
Mac
    
    brew install node

## Verification of installation 
    node -v
    v9.3.0
    
    npm -v
    5.6.0

## Running the program 
    node app.js
    or 
    node app

## Package.json
    npm init

## Managing packages
npm stands for Node Package Manager and is used to manage the packages and dependency of a nodejs application.

Packages can be installed
    
    npm install express -save 

Or uninstalled

    npm uninstall express

## Packages required 
    express : npm install express -s (save)
    nodemon : npm install nodemon -g (global)
    npm install ejs -save

## Debug
    1. is the server running ?
    lsof -Pi | grep 3000
    node      49258 deepu   13u  IPv4 0x5b60b3763cd870e9      0t0 TCP localhost:3000 (LISTEN)
    
    2. To find the pid of the process: 
    lsof -Pi | grep 3000 | tr -s ' ' | cut -d' ' -f2

    3. to kill the server: 
    kill -9 49258
