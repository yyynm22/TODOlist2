const app = Vue.createApp({
    data() {
      return {
        newItem: '',
        todos: [],
        doneTodos: []
      };
    },
    methods: {
      addItem() {
        if (this.newItem === '') return;
        let todo = {
          item: this.newItem,
          isDone: false
        };
        this.todos.push(todo);
        this.newItem = '';
      },
      deleteItem(index) {
        if (this.todos[index].isDone) {
          this.doneTodos.push(this.todos[index]);
        }
        this.todos.splice(index, 1);
      }
    }
  });
  
  app.mount('#app');