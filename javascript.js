/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

// Regular function - wrong but works

const myNum = 24;
const myModulus = 2;

function checkForEven(number) {
  return number % 2;
}

console.log(checkForEven(myNum) ? "It's odd!" : "It's even!");

function anotherCheckForEven(number, remainder) {
  return number % remainder;
}

console.log(anotherCheckForEven(myNum, myModulus) ? "It's odd!" : "It's even!");

// This function will return the string "odd" or "even" and use the ? "" : "" inside the function

function theReturnWay(number) {
  return number % 2 ? "Oddetall" : "Partall";
}
function anotherTheReturnWay(number, remainder) {
  return number % remainder ? "Oddetall" : "Partall";
}

console.log(theReturnWay(myNum));
console.log(anotherTheReturnWay(myNum));

// Arrow function this is wrong, but works
const num1 = 4;
const modulus = 2;
// prettier-ignore
const arrowFunction = number => number % 2;

console.log(arrowFunction(num1) ? "It's odd!" : "It's even!");

const anotherArrowFunction = (number, remainder) => number % remainder;

console.log(anotherArrowFunction(num1, modulus) ? "It's odd!" : "It's even!");

// Arrow function, this will return the string "odd" or "even" and use the ? "" : "" inside the arrow function
//prettier-ignore
const returnArrowFunction = number => number % 2 ? "Oddetall" : "Partall";

console.log(returnArrowFunction(num1));

const theBisArrowFunction = (number, modulus) =>
  number % modulus ? "Oddetall" : "Partall";

console.log(theBisArrowFunction(num1, modulus));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

let myString = "Dette er kult";

function capitalize(string) {
  return string.toUpperCase() + "!";
}

console.log(capitalize(myString));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

userName = "Christian";
timeOfDay = 15;

function greeting(name, time) {
  if (time < 0 || time > 23) {
    return console.log("Ugyldig tid");
  } else if (time >= 0 && time <= 5) {
    return console.log(`God natt ${name}`);
  } else if (time >= 6 && time <= 11) {
    return console.log(`God morgen ${name}`);
  } else if (time >= 12 && time <= 17) {
    return console.log(`God dag ${name}`);
  } //(time >= 18 && time <= 23) {
  else return console.log(`God natt ${name}`);
}

greeting(userName, timeOfDay);

// Refactored - Just for fun
usrName = "Christian";
timOfDay = 8;

function hilsen(name, time) {
  if (time < 0 || time > 23) {
    return console.log("Ugyldig tid");
  }

  let hilsen = "string";

  if (time <= 11) {
    hilsen = "morgen";
  } else if (time <= 17) {
    hilsen = "dag";
  } else {
    hilsen = "natt";
  }
  console.log(`God ${hilsen} ${usrName}`);
}

hilsen(usrName, timOfDay);

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

const fargerString = ["Rød", "Grønn", "Blå", "Gul"];
const tallString = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

function sliceArray(array) {
  const arraySliced = array.slice(1, -1);
  return arraySliced;
}

function anotherSliceArray(array) {
  const arraySliced = array.slice(1, -1);
  return arraySliced;
}

console.log(sliceArray(fargerString));
console.log(anotherSliceArray(tallString));

function sliceBothArrays(array1, array2) {
  const arraySliced1 = array1.slice(1, -1);
  const arraySliced2 = array2.slice(1, -1);
  return [arraySliced1, arraySliced2];
}

console.log(sliceBothArrays(fargerString, tallString));

// Just a little testies

const arrowSlicer = (array1, array2) => [
  array1.slice(1, -1),
  array2.slice(1, -1),
];

console.log("ArrowSlicer");
console.log(arrowSlicer(fargerString, tallString));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

const stringReplaceVanskelig = "  Javascript er vanskelig   ";
const stringReplaceVanskelig1 = " Det er vanskelig å bruke metoder ";
const stringReplaceVanskelig2 = "   vanskelig        ";

function stringReplace(string) {
  string = string.trim().replace("vanskelig", "gøy");
  return string;
}

console.log(stringReplace(stringReplaceVanskelig));
console.log(stringReplace(stringReplaceVanskelig1));
console.log(stringReplace(stringReplaceVanskelig2));

//prettier-ignore
const arrowTrimReplace = string =>
  string = string.trim().replace("vanskelig", "gøy");

console.log("Arrow trim replace");
console.log(arrowTrimReplace(stringReplaceVanskelig));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

const newItems = items
  .slice(1)
  .toString()
  .replace("Viskelær", "Linjal")
  .split(",")
  .splice(2, 3);
newItems.unshift("Markeringspenn");
// Javascript keeps complaining/it's not working as intended. Creating a new variable makes it work. Joe will have to explain why.
newItemsFerdig = newItems.join(" | ");
console.log(newItemsFerdig);

const matchingItems = items.filter((item) => item.includes("e"));
console.log(matchingItems);

const matchNewItems = newItems.filter((newItems) => newItems.includes("e"));
console.log(matchNewItems);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
