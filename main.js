var app = new Vue (
    {

    el: `#app`,

    data: {

        todo: [

            {
                text: `fare esercizio`,
                boolean: true
            },
            {
                text: `fare esercizio`,
                boolean: true
            },
            {
                text: `fare esercizio`,
                boolean: true
            },
            {
                text: `fare esercizio`,
                boolean: true
            },

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
        ]
    },

    methods: {

        elimina: function(index){
            //rimuovere un oggetto dall'array
            //splice: rimuove un elemento di un array grazie alla posizione e ne elimina tanti qunati gli dico dall'elemento trovato
            //console.log(`eliminato`)
            //return this.boolean = false
            this.todo.splice( index, 1)
        }

    }
    

    






})