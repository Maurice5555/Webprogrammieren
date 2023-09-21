//  Übung Lektion 1

// Gegeben ist ein folgendes Array:

const einkaufswagen = [
    {
      id: 1,
      name: "Die unendliche Geschichte - Buch",
      aufLager: true,
      lieferZeitTage: 1,
      menge: 3,
      preis: "12.99€",
      hersteller: {
        name: "BookSales",
        rating: 3,
      },
    },
    {
      id: 2,
      name: "The Beatles - Abbey Road CD",
      aufLager: false,
      lieferZeitTage: 4,
      menge: 1,
      preis: "14.80€",
      hersteller: {
        name: "CDSales",
        rating: 5,
      },
    },
    {
      id: 3,
      name: "Harry Potter und der Stein der Weisen - Blu-ray",
      aufLager: true,
      lieferZeitTage: 2,
      menge: 2,
      preis: "18.50€",
      hersteller: {
        name: "BookSales",
        rating: "",
      },
    },
    {
      id: 4,
      name: "Kindle Paperwhite",
      aufLager: true,
      lieferZeitTage: 1,
      menge: 1,
      preis: "119.99€",
      hersteller: {
        name: "Amazon",
        rating: 3,
      },
    },
    {
      id: 5,
      name: "Sony WH-1000XM4 Kopfhörer",
      aufLager: false,
      lieferZeitTage: 7,
      menge: 1,
      preis: "279.90€",
      hersteller: {
        name: "Sony",
        rating: 4,
      },
    },
  ];
  
  // AUFGABE 1
  // ---------
  // - Gib die Namen aller Artikel im Einkaufswagen aus.
const artikelNamen = einkaufswagen.map(artikel => artikel.name);
console.log("Namen aller Artikel im Einkaufswagen:", artikelNamen);
  // - Berechne den Gesamtbetrag des Einkaufswagens. (Hinweis: Achte auf den Datentyp der Preise!)
const gesbetrag = einkaufswagen.reduce((summe, artikel) => {
const preiszahl = parseFloat(artikel.preis.replace("€", ""));
    return summe + (preiszahl * artikel.menge);
  }, 0);
console.log("Gesamtbetrag des Einkaufswagens:", gesbetrag.toFixed(2) + "€");
  // (_Hinweis_: `preisString.replace("€", "")` kann in eine Zahl konvertiert werden)
  
  // AUFGABE 2
  // ---------
  // - Finde alle Artikel, die auf Lager (`aufLager: true`) sind.
console.log("Artikel auf Lager:", einkaufswagen.filter(artikel => artikel.aufLager));
  // - Zeige die Artikel an, die länger als 3 Tage Lieferzeit benötigen.
console.log("Lieferzeit > 3 Tage:", einkaufswagen.filter(artikel => artikel.lieferZeitTage > 3));
  // AUFGABE 3
  // ---------
  // - Erstelle eine Liste aller Hersteller-Namen aus dem Einkaufswagen.
console.log("Hersteller:", einkaufswagen.map(artikel => artikel.hersteller.name));
  // - Finde alle Artikel von dem Hersteller "BookSales".
console.log("Alles von BookSales:", einkaufswagen.filter(artikel => artikel.hersteller.name === "BookSales"));
  // - Bonus: verwende Objekt-Zerlegung (Destructuring)
  
  // AUFGABE 4
  // ---------
  // - Verwende die `map` Methode, um einen neuen Array zu erstellen, der nur die Namen und Preise der Artikel enthält.
console.log("Nur Preis und Name:", einkaufswagen.map(artikel => ({name: artikel.hersteller.name, preis: artikel.preis})));
  // - Verwende die `filter` Methode, um alle Artikel herauszufiltern, die mehr als 100€ kosten.
console.log("Artikel über 100€:", einkaufswagen.filter(artikel => parseFloat(artikel.preis.replace("€", "")) > 100))
  // - Erstelle eine Funktion, die den durchschnittlichen Preis der Artikel im Einkaufswagen berechnet (For-Schleife).
function durchschnittspreis(einkaufswagen) {
    let preis = 0;
    for (const artikel of einkaufswagen) {
        const einzelpreis = parseFloat(artikel.preis.replace("€", "")); 
        preis += einzelpreis;
    }
    return preis /einkaufswagen.length;
}
const durchschnitt = durchschnittspreis(einkaufswagen);
console.log("Durchschnittspreis aller Artikel:", durchschnitt);


//ohne Funktion
/*let rt = 0;
for (const artikel of einkaufswagen) {
    const er = parseFloat(artikel.preis.replace("€", "")); 
    rt += er;
}
let qw = rt /einkaufswagen.length;

console.log("Durchschnittspreis aller Artikel:", qw);*/  