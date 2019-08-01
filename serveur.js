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

function tourSuivant(){

  if(joueurActuel == nbJoueurs){

    joueurActuel = 1;

  }

  else{

    joueurActuel +=1;

  }

  couleurClick = joueurs[joueurActuel-1];

  afficher('tour du joueur ' + joueurActuel, couleurs[couleurClick]);

}