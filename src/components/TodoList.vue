<script>
  const removeEvent = 'remove';

  export default {
    props: {
      todos: Array,
    },
    emits: [removeEvent],
    methods: {
      removeTodo(todoId) {
        this.$emit(removeEvent, todoId);
      }
    },
  }

</script>

<template>
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
</template>

<style>
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
    cursor:         pointer;
    flex:           1 1 auto;
    padding-left:   .6em;
    padding-right:  1.2em;

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