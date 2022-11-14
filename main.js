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

        elimina: function(){
            //console.log(`eliminato`)
            return this.boolean = false
        }

    }
    

    






})