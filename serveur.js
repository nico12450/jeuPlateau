const http = require('http');
const fs = require('fs');

const PORT=8080;

var fichierHTML;

fs.readFile('./JeuPlateau.html', function (err, html) {

    if (err) throw err;

    fichierHTML = html;

});


http.createServer(function(request, response) {

	var adresse = request.url;

	if(adresse == "/favicon.ico"){

	}

	else{

		response.writeHeader(200, {"Content-Type": "text/html"});
		response.write(fichierHTML);
		response.end();

	}


}).listen(PORT);

