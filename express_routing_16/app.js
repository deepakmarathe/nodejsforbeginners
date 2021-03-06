// Express
// 1. Easy and flexibe routing system.
// 2. Integrates with many templating engines
// 3. Contains a middleware framework.

// HTTP Methods : 
// GET
// POST 
// DELETE
// PUT

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var urlEncodedParser = bodyParser.urlencoded({extended:false})

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

app.get('/', function (request, response) {
    // response.send('this is the homepage')
    response.render('index')
})

app.get('/contact', function (request, response) {
    response.render('contact', {qs: request.query})
})

app.post('/contact', urlEncodedParser, function (request, response) {
    console.log(request.body)
    response.render('contact-success', {data: request.body })
})

// Demo of view engine
// Demo of partial templates. | Partial Views

app.get('/profile/:name', function (request, response) {
    var data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    }
    response.render('profile', {
        person: request.params.name,
        data: data
    })
})

// Demo of using route params.
app.get('/profile/:id', function (request, response) {
    response.send('You requested to see a profile with the name of ' + request.params.name)
})

app.listen(3000)