<script setup lang="ts">
  import { ref } from 'vue';
  import type { TodoModel } from './models';


  const todos = ref<TodoModel[]>([
    { text: 'Learn Vue.js', isComplete: false, }
  ]);

  const newTodo = ref('');

  const addTodo     = ref(() => todos.value.push({ text: newTodo.value, isComplete: false }));
  const removeTodo  = ref((todoIndexToRemove: number) => {
    todos.value = todos.value.filter((_, todoIndex) => todoIndex !== todoIndexToRemove);
  });
  const toggleCompleteTodo = ref((todoIndexToComplete: number) => todos.value[todoIndexToComplete].isComplete = !todos.value[todoIndexToComplete].isComplete);
</script>

<template>
  <form @submit.prevent="addTodo">
    <label for="newTodo"></label>
    <input type="text" name="newTodo" v-model="newTodo">

    <button type="submit">Add todo</button>
  </form>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span :class="todo.isComplete ? 'completed' : ''">{{ todo.text }}</span>
      <button @click="removeTodo(index)">Remove</button>
      <button @click="toggleCompleteTodo(index)">{{ todo.isComplete ? 'Uncompleted' : 'Completed' }}</button>
    </li>
  </ul>
</template>

<style>
  .completed { text-decoration: line-through; }
</style>
