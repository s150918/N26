
// ... Das ist ein einzeiliger Kommentar
/* das ist ein mehrzeiliger Kommentar*/
// das Express framework wird eingebunden
// ein Framework soll die Programmierung erleichtern
// das Framework muss mit npm installiert werden: 
// im Terminal npm install express --save

const express = require ('express')

const app = express()

// das App objekt wird initialisiert. Das App Objekt repräsentiert den Server
// auf das App objekt werden im folgenden Methoden aufgerufen.

app.set('view engine', 'ejs')

// mit der ejs view engine werden Werte von der Server.js zur Index Datei gegeben.

app.use(express.static('public'))

// ...

const bodyParser = require('body-parser')

// ...

app.use(bodyParser.urlencoded({extended: true}))

// ...

const server = app.listen(process.env.PORT || 3000, () => {        console.log('Server lauscht auf Port %s', server.address().port) 