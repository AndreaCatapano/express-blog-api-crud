### Milestone 1
- Creiamo un controller per i nostri post, in una cartella controllers.
- All’interno, prepariamo tutte le funzioni necessarie 
- Importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte.
- Testiamo su postman 


### Milestone 2 
- Creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts.
- Ora passiamo ad implementare le logiche delle nostre CRUD:
  - Index dovrà restituire la lista dei post in formato JSON
  - Show dovrà restituire un singolo post in formato JSON
  - Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.



### Milestone 3 
- Prepariamo una nuova chiamata verso la nostra rotta store
  - Impostiamo il verbo e l’endpoint corretti
  - Selezioniamo il tab body e scegliamo il formato raw e JSON
  - Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

### Milestone 4 
- Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
- All’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log


### Milestone 5 
- Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
- Testiamolo con postman.

### Milestone 6 
- Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.

### Milestone 7
- Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

### Bonus 
- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
