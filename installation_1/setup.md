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

## Debug
    1. is the server running ?
    lsof -Pi | grep 3000
    node      49258 deepu   13u  IPv4 0x5b60b3763cd870e9      0t0 TCP localhost:3000 (LISTEN)
    
    2. To find the pid of the process: 
    lsof -Pi | grep 3000 | tr -s ' ' | cut -d' ' -f2

    3. to kill the server: 
    kill -9 49258
        
## Installing packages
    npm install express --save --global 
    
## Package.json
    npm init
        
