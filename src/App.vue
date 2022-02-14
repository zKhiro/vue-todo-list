<script>
  import TodoList from "./components/TodoList.vue";
  import SideMenu from "./components/SideMenu.vue";


  let id = 0;

  export default {
    data() {
      return {
        todos: [
          { id: id++, text: "Learn Vue.js", isComplete: false },
        ],
        hideCompleted: false,
      };
    },
    methods: {
      addTodo(newTodo) {
        this.todos.push({ id: id++, text: newTodo, isComplete: false });
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
    components: { TodoList, SideMenu }
}
</script>

<template>
  <SideMenu @add="addTodo">
    <button class="btn btn-danger" @click="removeAllTodos">Remove All</button>

    <button class="btn btn-primary" @click="hideCompleted = !hideCompleted">{{ hideCompleted ? 'Show' : 'Hide'}} Completed</button>
  </SideMenu>

  <main>
    <section class="container">
      <TodoList :todos="filteredTodos" @remove="removeTodo" />
    </section>
  </main>
</template>

<style>
  .container { padding: 1rem; }
</style>
