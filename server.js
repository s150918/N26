
// ... Das ist ein einzeiliger Kommentar
/* das ist ein mehrzeiliger Kommentar*/


// das Express framework wird eingebunden
// ein Framework soll die Programmierung erleichtern
// das Framework muss mit npm installiert werden: 
// im Terminal npm install express --save


const express = require ('express')


// das App objekt wird initialisiert. Das App Objekt repräsentiert den Server
// auf das App objekt werden im folgenden Methoden aufgerufen.
// Bindeglied zwischen Node Webserver und Client Browser
// das App Objekt witd in der express Funktion zugewiesen


const app = express()

// mit der ejs view engine werden Werte von der Server.js zur Index Datei gegeben.

app.set('view engine', 'ejs')

// gibt an wo die statischen inhalte liegen soll, und sucht diese im public Ordner

app.use(express.static('public'))

// Bodyparser bekommt Modul zugewiesen 
// Bodyparser bereitet Daten aus html für die Übergabe an die server.js vor
// von der GUI Schicht zur Logikschicht

const bodyParser = require('body-parser')

// 

app.use(bodyParser.urlencoded({extended: true}))

// Server starten
// Client schickt request an server, dieser lauscht auf requests 
// wenn request reinkommt nimmt server es war und antwortet
// Server wird im Terminal mit node.\server.js gestartet
// strg +c starten bzw. stoppen

const server = app.listen(process.env.PORT || 3000, () => {     
       console.log('Server lauscht auf Port %s', server.address().port)   })

// die Eingabe vom client an den Server (Request)
//Client bekommt eine Antwort vom Server (Response)
app.get('/',(reg, res, next) => {

    res.render('index.ejs', {
    })
})
        
