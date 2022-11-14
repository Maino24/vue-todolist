var app = new Vue (
    {

    el: `#app`,

    data: {

        todo: [

            {
                text: `fare esercizio`,
                boolean: false
            },
            {
                text: `fare esercizio`,
                boolean: false
            },
            {
                text: `fare esercizio`,
                boolean: false
            },
            {
                text: `fare esercizio`,
                boolean: false
            }

            /*
            todo1: {
                text: `fare esercizio`,
                stato: ``,
            },
            todo2: {
                text: ``,
                stato: ``,
            },
            todo3: {
                text: ``,
                stato: ``,
            },
            todo4: {
                text: ``,
                stato: ``,
            },
            */
        ],
        todoCompleto: [

        ]
    },
    beforeUpdate(){
        //entra quando l'applicativo vue controlla il dom e i dati e i componenti si modificano
        this.todo.forEach((elem, index)=> {
            if(elem.boolean == true ){
                this.todoCompleto.push(elem);
                this.todo.splice(index,  1)
            }
        });
        
    },

    methods: {

        elimina: function(index){
            //rimuovere un oggetto dall'array
            //splice: rimuove un elemento di un array grazie alla posizione e ne elimina tanti qunati gli dico dall'elemento trovato
            //console.log(`eliminato`)
            //return this.boolean = true
            this.todo.splice( index, 1)
        },
        todoCompletato: function(index){
        
            //this.todo[index].boolean = true;
            if( this.todo[index].boolean===false){
                this.todo[index].boolean = true;
            }else{
                this.todo[index].boolean = false;
            }

        }

    }
    

    






})