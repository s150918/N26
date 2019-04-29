class Auto {
    constructor(){
        this.Raeder
        this.sitze
    }
}


// eine Klasse ist ein Bauplan. Der Bauplan sieht vor, wie Objekte erstellt werden. 
// alle Objekte, die von einem Bauplan erstellt werden, haben dieselben Eigenschaften, aber möglicherweise unterschiedliche Eigenschaftswerte
// Klassendefinition

 class Rechteck{
     constructor(){
         this.laenge
         this.breite
     }
}

// Klassendefinition für Schüler in einer Schule:

class Schueler {
    constructor(){
        this.geschlecht
        this.klasse
        this.alter
        this.vorname
        this.nachname
    }
}

class Fussballer {
    constructor(){
        this.vorname
        this.nachname
        this.verein
        this.vertragslaufzeit
        this.marktwert
    }
}




    //Deklaration eines neuen Objekts vom Typ Rechteck
    // Deklaration = Bekanntmachung
    //let rechteck = ...
    // Instanzierung eines neuen Objektes
    // Instanzierung erkennt man immer am reservierten Wort new
    // bei der Instanzierung wird Arbeitsspeicher bereitgestellt. 
    // ... = new Rechteck()
    
// 1. Deklaration  2. Instanzierung  
    let rechteck = new Rechteck()
    let schueler = new Schueler()
    let fussballer = new Fussballer
   
    // 3. Initalisierung (konkrete Eigenschaftswerte werden zugewiesen)
   
    rechteck.breite = 2
    rechteck.laenge = 3 

    schueler.geschlecht = "m"
    schueler.alter = 17

    fussballer.vorname = "Ahmed"
    fussballer.nachname = "Kutucu"
    fussballer.verein = "FC Schalke 04"
    fussballer.vertragslaufzeit = 3
    fussballer.marktwert = 10

 console.log("Länge:" +rechteck.laenge)
console.log("breite:" +rechteck.breite)

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {   
        breite : rechteck.breite,   
        laenge : rechteck.laenge,        
        geschlecht : schueler.geschlecht,
        alter : schueler.alter,
        vorname : fussballer.vorname,
        nachname : fussballer.nachname,
        verein : fussballer.verein,
        vertragslaufzeit : fussballer.vertragslaufzeit,  
        marktwert : fussballer.marktwert                   
    })
})