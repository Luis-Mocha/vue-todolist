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
            ],
            testoInput: '',
            error: false,     
        }
    },

    methods: {
        // funzioni Vue3
        creaTodo() {
            if (this.testoInput != '' && this.testoInput.length >= 5 && this.testoInput.length <= 20 ) {
                let newObject = {}

                newObject = {text: this.testoInput, done: false}

                this.todos.unshift(newObject)

                this.testoInput = ''
                this.error = false
            } else {
                this.error = true
            }
        },

        cancelTask(i) {
            this.todos.splice(i, 1)
        },
        
        checkTask(i) {
            this.todos[i].done = true
        }
        
    }
}).mount('#app')