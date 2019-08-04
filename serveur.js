const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');
const path = require('path');

const FAVICON = path.join(__dirname, 'favicon.ico');

const PORT=8080;

var fichierHTML;

fs.readFile('./puissance4.html', function (err, html) {

    if (err) throw err;

    fichierHTML = html;

});


http.createServer(function(request, response) {

	var adresse = request.url;

	if(adresse == "/favicon.ico"){

		response.setHeader('Content-Type', 'image/x-icon');
		fs.createReadStream(FAVICON).pipe(response);

	}

	else{

		if(request.method == 'POST'){

			var body = '';

		    request.on('data', chunk => {
		        body += chunk.toString();
		    });

		    request.on('end', () => {

		    	var donnees = parse(body);
		    	//console.log(donnees);

		        var r = {
	    			status  : 200,
	    			success : 'Updated Successfully'
				};

		        response.end(JSON.stringify(r));
		        
		    });

		}

		else{

			response.writeHeader(200, {"Content-Type": "text/html"});
			response.write(fichierHTML);
			response.end();

		}

	}


}).listen(PORT);

