let nome = 'Francesco'
let telefono = 3336666666

// let name;
// let number;

// let check = Number(prompt('premi 1 se vuoi eliminare o aggiungere un contatto, \n premi 2 se vuoi modificare un contatto'));


let rubrica = {
    contacts: [
        {'nome': 'Nicola', 'telefono': 3331111111},
        {'nome': 'Lorenzo', 'telefono': 3332222222},
        {'nome': 'Paola', 'telefono': 3333333333},
        {'nome': 'Jenny', 'telefono': 3334444444}
    ],
    
    mostra_contatti : function () {
        this.contacts.forEach(contatto => {
            console.log(`${contatto.nome} : ${contatto.telefono}`);
        })
    },
    
    
    
    mostra_contatto : function (nome) {
        let contatto = this.contacts.find(contatto => contatto.nome == nome);
        if (contatto) {
            console.log(`CONTATTO TROVATO - ${contatto.nome} : ${contatto.telefono}`);
            
        }else {
            console.log('Contatto non trovato');
            
        }
    },
    
    rimuovi_contatto : function (nome, telefono) {
        let contatto = this.contacts.find(contatto => contatto.nome == nome)
        let index = this.contacts.indexOf(contatto)
         this.contacts.splice(index, 1)
        console.log('Contatto eliminato');
    },
           
            
    aggiungi_contatto : function (nome , telefono) {
        
        this.contacts.push({nome : nome, telefono: telefono})
        console.log('Contatto aggiunto');
    },
            
    
    modifica_contatto : function (nome, nuovoTelefono){
        let contatto = this.contacts.find(contatto => contatto.nome == nome);
        if (contatto) {
            console.log(`Contatto modificato`);
            contatto.telefono = nuovoTelefono
            
        }else{
            console.log('Contatto non trovato');
        }
    }
    
}

rubrica.mostra_contatti()
rubrica.mostra_contatto(name)
rubrica.rimuovi_contatto(nome, telefono)
rubrica.modifica_contatto('Paola', 3331111111)
rubrica.aggiungi_contatto(nome, telefono)
// rubrica.mostra_contatti()
// switch (check) {
//     case 1:
//        name = prompt('inserisci il nome del contatto')
//        number = prompt('inserisci il numero del contatto')
//        rubrica.rimuovi_contatto(name, number)
//     break;
//     case 2: 
//        name = prompt('inserisci il nome del contatto')
//        number = prompt('inserisci il numero del contatto')
//        rubrica.modifica_contatto(name, number)
    
// }

rubrica.mostra_contatti()



