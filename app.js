const express=require('express'),
      ejs    =require('ejs');
var app=express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

// app.get('/',function(req,res){

// })
//same as above code
app.get('/',(req,res)=>{
	res.render('index',{
		welcomeMessage:'hello welcome to our webpage',
		pageTitle:'About Page',
		currentYear:new Date().getFullYear()
	})
});
app.get('/about',(req,res)=>{
	res.render('about',{
		pageTitle:'About Page',
		currentYear:new Date().getFullYear()
	});
});

app.get('/bad',(req,res)=>{
	res.send({
		message:'something went wrong'
	});
});

app.listen(3000,(req,res)=>{
	console.log('serving to your request');
})