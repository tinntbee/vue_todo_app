<template>
  <TodoComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import TodoComponent from "../components/Todo.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    TodoComponent,
  },
});
</script>
