<script>
  import Icon from "./Icon.vue";

  let addEvent = 'add';

  export default {
    data() {
      return {
        newTodo: "",
      };
    },
    emits: [addEvent],
    methods: {
      addTodo() {
        if (this.newTodo) {
          this.$emit(addEvent, this.newTodo);
          this.newTodo = "";
        }
      }
    },
    components: { Icon }
  }
</script>

<template>
  <section class="side-menu">
    <header>
      <h1 class="app-title">
        <Icon icon="list" :size="20"></Icon>

        to do
      </h1>
    </header>

    <form @submit.prevent="addTodo">
      <div class="form-group">
        <label for="newTodo">New to do</label>

        <div class="input-group">
          <input type="text" id="newTodo" v-model="newTodo">

          <button type="submit" class="btn-success">
            <Icon icon="plus" :size="18"></Icon>
          </button>
        </div>
      </div>
    </form>

    <h3>Configs</h3>

    <div class="row gap-3 mt-3">
      <slot />
    </div>
  </section>
</template>

<style>
  .side-menu {
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
</style>