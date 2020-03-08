const fs = require('fs');

fs.readFile('user-data.txt',(err,data) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(data.toString());

});



fs.writeFile('user-data.txt','username=mAX' , err => {
	if (err) {
		console.log('error')
	}else{
		console.log('write file is done')
	}
});


const http = require('http');
const server = http.createServer((request,response) => {
	response.setHeader('Content-Type','text/html')
	response.write('hello res');
	response.end();
});
server.listen(3000);