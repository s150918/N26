class Konto{
    constructor(){
        this.Kontonummer
        this.Kontoart
    }
}
// Klassendefintion
class Kunde {
    constructor(){
        this.IdKunde
        this.Kennwort 
        this.Adresse
        this.Nachname
        this.Geschlecht
        this.Geburtsdatum
        this.Vorname
    }
} 
 // Deklaration und Instanzierung
 let kunde = new Kunde ()  

 //Initialisierung
kunde.IdKunde = 4711
kunde.Kennwort = "123"
kunde.Vorname = "Hildegart"
kunde.Adresse = "Berlin"
kunde.Nachname = "Schmidt"
kunde.Geschlecht = "m"
kunde.Geburtsdatum = "1999-12-31"

const bankleitzahl = 2700000
const laendererkennung = "DE"
const express = require('express')
const iban = require ('iban')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())



const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn die Seite localhost:3000/impressum aufgerufen wird, ...

app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird impressum.ejs gerendert.
        
        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.post('/',(req, res, next) => {   
    
// in Zeile 91 Der Wert des Inputs mit dem name = idKunde wird über den Request zugewiesen an die constante IdKunde

    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort
        
// wenn der Wert von IdKunde dem Wert der Eigenschaft kunde.idKunde entspricht 
// und der Wert von kennwort dem der Eigenschaft kunde.kennwort
// enspricht, dann werden die Anweisung im Rumpf der if Kontrollstruktur
// abgeartbeitet.
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){            
        console.log("Der Cookie wird gesetzt:")
        res.cookie('istAngemeldetAls', idKunde)
        res.render('index.ejs', {  
            kunde : idKunde          
        })
    }else{            
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})

// Wenn die Seite localhost:3000/kontoAnlegen angesurft wird, ...

app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('kontoAnlegen.ejs', {    
            meldung : ""                          
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn der Button auf der kontoAnlegen-Seite gedrückt wird, ...

app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        let konto = new Konto()
        konto.Kontonummer = req.body.kontonummer
        konto.iban = iban.fromBBAN (laenderkennung,bankleitzahl + " "+konto.Kontonummer)
        konto.Kontoart = req.body.kontoart


        let bankleitzahl = 12345678

        let errechneteIban = iban.fromBBAN("DE",bankleitzahl + ""+ konto.kontonummer)

        console.log(errechneteIban)
              
        res.render('kontoAnlegen.ejs', {                              
            meldung : "Das " + konto.Kontoart + " Iban " + konto.Kontonummer + " wurde erfolgreich angelegt."

        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/stammdatenPflegen.ejs',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
   
        
        res.render('stammdatenPflegen.ejs', {    
            meldung : ""                          
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.post('/stammdatenPflegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
       
        kunde.Nachname = req.body.nachname
        kunde.Kennwort = req.body.kennwort 
              
        res.render('stammdatenPflegen.ejs', {                              
            meldung : "Die Stammdaten wurden aktualisiert."

        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})




