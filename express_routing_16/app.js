var express = require('express')
var app = express()

app.get('/', function(request, response){
    // response.send('this is the homepage')
    response.sendfile(__dirname + '/index.html')
})

app.get('/contact', function(request, response){
    // response.send('this is the contact page')
    response.sendfile(__dirname + '/contact.html')
})

app.get('/profile/:id', function(request, response){
    response.send('You requested to see a profile with the id of ' + request.params.id)
})

app.get('/profiles', function(request, response){
    response.getMaxListeners()
})
app.listen(3000)


