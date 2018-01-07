var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var GoogleSpreadSheet = require('google-spreadsheet');
var creds = require('./client/secret_client.json');

var doc = new GoogleSpreadSheet('1DHjj65IDsfXASc41ePe6DHJY2zHNPHIcoj5P1q0guY0');

// Authenticate with the Google Spreadsheets API.
// doc.useServiceAccountAuth(creds, function (err) {
//
//     // Get all of the rows from the spreadsheet.
//
//     doc.addRow(1, { Username: 'Agnew', Password: 'Samuel' }, function(err) {
//         if(err) {
//             console.log(err);
//         }
//     });
// });


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname+'/public'));


//*************************
// Router configuration
//***********************
app.get('/', function(req,res){
    res.redirect("/index");
});
app.get('/index',function(req,res)
    {
        res.render('index');

    }

);

//Events
app.get('/events',function(req,res)
    {

        res.render('events');
    }

);

//sponsors
app.get('/sponsors',function(req,res)
    {

        res.send('Sponsors page')
    }

);


//Team page
app.get('/team',function(req,res)
    {

        res.render('team');
    }

);

//Gallery page

app.get('/gallery',function(req,res)
    {

        res.render('gallery');
    }


);

//About page

app.get('/about',function(req,res) {

    res.render("about");
});

//Contact page
app.get('/contact',function(req,res) {

    res.send('contact page');
});

//****************
// Registration Routes
//********************

app.get('/register',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);



//***********************





//**************************

app.listen(3000,function(req,res)
    {

        console.log('serving starting on port 3000')
    }

);