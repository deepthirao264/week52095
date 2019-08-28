let express = require ('express');
let app = express();
let bodyParser = require('body-parser');

let db = [];

//allow Express to understand the urlencoded format
app.use(bodyParser.urlencoded({
    extended: false
    })
)

//allowing the inclusion of static images such as images and background color 
app.use(express.static('images'));
app.use(express.static('css'));

app.get('/', function(req,res){
    console.log('Hello from app.get');
    //res.send("Thank for response");
    res.sendFile(__dirname+"/views/" + 'homepage.html');
});

app.get('/newtask', function(req,res){
    console.log('Hello from app.get');
    //res.send("Thanks for response");
    res.sendFile(__dirname+"/views/" + 'taskadd.html');
})

app.post('/newtask', function(req,res){   
    res.sendFile(__dirname+"/views/" + 'homepage.html');
    db.push(req.body);
    
});



app.get('/listtasks', function(req,res){
    console.log('Hello from app.get');
    //res.send("Thanks for response");
    res.render(__dirname+"/views/" + 'tasklist.html', {ar:db});
});

app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.listen(8000);

console.log('Server running at http://localhost:8000/');