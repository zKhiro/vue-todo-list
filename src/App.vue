<script>
  import TodoList from "./components/TodoList.vue";


  let id = 0;

  export default {
    data() {
      return {
        todos: [
          { id: id++, text: "Learn Vue.js", isComplete: false },
        ],
        newTodo: "",
        hideCompleted: false,
      };
    },
    methods: {
      addTodo() {
        this.todos.push({ id: id++, text: this.newTodo, isComplete: false });
        this.newTodo = "";
      },
      removeTodo(todoIdToRemove) {
        this.todos = this.todos.filter(todo => todo.id !== todoIdToRemove);
      },
      removeAllTodos() {
        this.todos = [];
      }
    },
    computed: {
      filteredTodos() {
        let filteredTodos = this.todos;
        if (this.hideCompleted) {
          filteredTodos = filteredTodos.filter(todo => !todo.isComplete);
        }
        return filteredTodos;
      }
    },
    components: { TodoList }
}
</script>

<template>
  <section class="lateral-menu">
    <header>
      <h1 class="app-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>

        to do
      </h1>
    </header>

    <form @submit.prevent="addTodo">
      <div class="form-group">
        <label for="newTodo">New to do</label>

        <div class="input-group">
          <input type="text" id="newTodo" v-model="newTodo">

          <button type="submit" class="btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </form>

    <h3>Configs</h3>

    <div class="row gap-3 mt-3">
      <button class="btn btn-danger" @click="removeAllTodos">Remove All</button>

      <button class="btn btn-primary" @click="hideCompleted = !hideCompleted">{{ hideCompleted ? 'Show' : 'Hide'}} Completed</button>
    </div>
  </section>

  <main>
    <section class="container">
      <TodoList :todos="filteredTodos" @remove="removeTodo" />
    </section>
  </main>
</template>

<style>
  .container { padding: 1rem; }

  .lateral-menu {
    background-color: white;
    box-shadow:       1px 0 #e7e7e7;
    padding:          2rem;
  }

  .app-title {
    align-items:    center;
    display:        flex;
    gap:            .5em;
    margin-bottom:  3rem;
  }

  .feather-plus {
    height: 1rem;
  }

  .completed {
    color:        #7e7d8d;
    text-decoration:  line-through;
  }
</style>
