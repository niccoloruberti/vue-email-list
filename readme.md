PROBLEMA: Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

- creo un elemento nel DOM dove andrò a stampare la lista delle email;
- creo una funzione 'generateTenRandomEmails' che esegue 10 volte un ciclo e tramite l'API fornita crea una mail random;
- creo un array 'randomEmails' dove vado vado a pushare le email create tramite l'API;
- tramite la direttiva v-for stampo le email create nella lista del DOM;
- richiamo la funzione all'interno dell'istanza mounted;