<script>
  import Checkbox from "./form/Checkbox.vue";
  import HoldButton from "./HoldButton.vue";
  import Icon from "./Icon.vue";

  import { animate } from "../utils";
  import { CustomEvents } from "../utils/custom-events.const";


  const removeEvent = 'remove';

  export default {
    data() {
      return { CustomEvents }
    },
    props: {
      todos: Array,
    },
    emits: [removeEvent],
    methods: {
      removeTodo(todoId) {
        console.log(todoId);
        this.$emit(removeEvent, todoId);
      },
      animate,
    },
    components: { Checkbox, HoldButton, Icon }
  }

</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id">
      <label
        :for="`doneCheck${todo.id}`"
        @click.self="animate($event.target, 'ani-scale-down')"
      >
        <Checkbox
          :checkboxId="`doneCheck${todo.id}`"
          v-model="todo.isComplete"
        ></Checkbox>

        <span :class="{ completed: todo.isComplete }">{{ todo.text }}</span>

        <HoldButton
          class="btn-danger remove"
          progressColor="#f9c4d4"
          :duration="500"
          v-on:[CustomEvents.HoldButtonFinish]="removeTodo(todo.id)"
        >
          <Icon icon="trash-2"></Icon>
        </HoldButton>
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

  .todo-list li>label *:not(button.remove) {
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

  .ani-scale-down {
    animation: scale-down .2s;
  }

  @keyframes scale-down {
    0%, 100%  { transform: scale(1); }
    50%       { transform: scale(.97); }
  }
</style>