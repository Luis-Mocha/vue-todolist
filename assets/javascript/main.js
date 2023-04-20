const {createApp} = Vue

createApp({
    data() {
        return {
            // variabili Vue3
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

            
        }
    },

    methods: {
        // funzioni Vue3
        
        
    }
}).mount('#app')