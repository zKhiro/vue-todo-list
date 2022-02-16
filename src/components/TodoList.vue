<script>
  import Checkbox from "./form/Checkbox.vue";
  import { animate } from "../utils";

  const removeEvent = 'remove';

  export default {
    props: {
      todos: Array,
    },
    emits: [removeEvent],
    methods: {
      removeTodo(todoId) {
        this.$emit(removeEvent, todoId);
      },
      animate,
    },
    components: { Checkbox }
  }
</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id">
      <label
        :for="`doneCheck${todo.id}`"
        @click.self="animate($event.target, 'scale-down-animation')"
      >
        <Checkbox
          :checkboxId="`doneCheck${todo.id}`"
          v-model="todo.isComplete"
        ></Checkbox>

        <span :class="{ completed: todo.isComplete }">{{ todo.text }}</span>

        <button
          class="btn btn-danger remove"
          @click="removeTodo(todo.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </label>
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
    display: block;
  }

  .todo-list li>label {
    align-items:    center;
    border-radius:  .4em;
    cursor:         pointer;
    display:        flex;
    padding:        .2em;
    transition:     background .1s;
  }

  .todo-list li>label:hover {
    background-color: #e9f1fb;
    border-radius:        .4em;
  }

  .todo-list li>label * {
    pointer-events: none;
  }

  .todo-list li>label>span {
    flex:           1 1 auto;
    padding-left:   .6em;
    padding-right:  1.2em;

    transition: color .2s;
  }

  .todo-list li .remove svg {
    height: 1rem;
  }

  .completed {
    color:            var(--gray-500);
    text-decoration:  line-through;
  }

  .scale-down-animation {
    animation: scale-down-animation .2s;
  }

  @keyframes scale-down-animation {
    0%, 100%  { transform: scale(1); }
    50%       { transform: scale(.97); }
  }
</style>