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
                },
                {
                    text: 'Preparare la cena',
                    done: true
                }
            ],
            testoInput: '',
            error: false,
            doneTasks: 0,
            toDoTasks: 0, 
        }
    },

    created() { 
        //cicli di vita dei componenti di applicazioni Vue. Vengono eseguite azioni al caricamento dei componenti
        this.countTasks()
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
        },

        countTasks() {
            this.doneTasks = 0
            this.toDoTasks = 0
            
            for (const key in this.todos) {

                if (this.todos[key].done === true) {
                    
                    this.doneTasks++ 
                }

                if (this.todos[key].done === false) {
                    this.toDoTasks++ 
                }

                console.log(this.todos[key].done)
            }
        },
        
    }
}).mount('#app')