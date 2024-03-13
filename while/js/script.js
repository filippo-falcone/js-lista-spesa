/* -----------------------------------------------------------------------------------------------------------
   Data una lista della spesa:
   const list = [
       'Latte',
       'Cacao',
       'Insalata',
       'Carote',
       'Pomodori',
       'Piatti pronti'
   ];
   Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
   Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
---------------------------------------------------------------------------------------------------------- */
/*
// Creo un ciclo while
// - Creo un li
// - Inserisco l'elemento li nel DOM finchè i è minore della lunghezza dell'array
*/
// Variabili
const ulContainer = document.querySelector('#lista-spesa');
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
// Funzionalità
let i = 0
while (i < list.length) {
    let liElement = document.createElement("li");
    liElement.innerHTML = list[i];
    ulContainer.append(liElement);
    i++;
}