var express=require('express');
var app=express();

app.set('port',process.env.PORT||5000);
app.listen(app.get('port'),function(){
	console.log('Request header app is running: ',app.get('port'));
})

app.get('/api/whoami',function(req,res){
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	res.json({
		"ip":ip,
		"lang":req.headers["accept-language"].split(',')[0],
		"OS":req.headers['user-agent'].split(') ')[0].split(' (')[1]
	});

});
