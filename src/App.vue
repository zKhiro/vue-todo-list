<script>
 export default {

 }
  // let id = 0;

  // const todos = ref<TodoModel[]>([
  //   { id: id++, text: 'Learn Vue.js', isComplete: false, }
  // ]);

  // const newTodo = ref('');

  // const addTodo     = ref(() => todos.value.push({ id: id++, text: newTodo.value, isComplete: false }));
  // const removeTodo  = ref((todoIdToRemove: number) => {
  //   todos.value = todos.value.filter((todo) => todo.id !== todoIdToRemove);
  // });

  // get todosList(): TodoModel[] {
  //   return [];
  // }
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
  </section>

  <main>
    <section class="container">
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <input
            type="checkbox"
            :id="`doneCheck${todo.id}`"
            v-model="todo.isComplete"
          >

          <label :for="`doneCheck${todo.id}`" :class="todo.isComplete ? 'completed' : ''">{{ todo.text }}</label>

          <button
            class="btn btn-danger remove"
            @click="removeTodo(todo.id)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </li>
      </ul>
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

  .todo-list {
    display:        flex;
    flex-direction: column;
    gap:            .8rem;
    padding:        0;
  }

  .todo-list li {
    align-items:  center;
    display:      flex;
    padding:      .2em;
    transition:   background .1s;
  }

  .todo-list li:hover {
    background-color: #e9f1fb;
    border-radius:        .4em;
  }

  .todo-list li label {
    cursor:       pointer;
    flex:         1 1 auto;
    padding-left: .6em;
    padding-right: 1.2em;

    transition: color .2s;
  }

  .todo-list li .remove svg {
    height: 1rem;
  }

  .completed {
    color:        #7e7d8d;
    text-decoration:  line-through;
  }
</style>
