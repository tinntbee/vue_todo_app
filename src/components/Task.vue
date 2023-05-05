<template>
  <v-card
    class="my-2"
    color="#2f3136"
    rounded="lg"
    variant="flat"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <v-card-item>
      <v-card-title class="text-body-2 d-flex align-center">
        <v-icon
          v-if="task.status === 'Todo'"
          color="#06b894"
          icon="mdi-calendar"
          start
        />
        <v-icon
          v-if="task.status === 'Completed'"
          color="#949cf7"
          icon="mdi-calendar-check"
          start
        />
        <v-icon
          v-if="task.status === 'Deleted'"
          color="gray"
          icon="mdi-delete-empty"
          start
        />

        <p class="text-h6" :class="{ 'text-disabled': task.status !== 'Todo' }">
          {{ task.name }}
        </p>
      </v-card-title>
    </v-card-item>

    <v-divider></v-divider>

    <div class="ps-2 d-flex align-center">
      <v-btn
        v-if="task.status === 'Todo'"
        class="text-none text-subtitle-1 my-2"
        color="#06b894"
        size="small"
        variant="flat"
        @click="completeTask"
      >
        Completed
      </v-btn>
      <v-btn
        v-else-if="task.status === 'Completed'"
        class="text-none text-subtitle-1 my-2"
        color="#5865f2"
        size="small"
        variant="flat"
        @click="unCompleteTask"
      >
        Back to Todo
      </v-btn>
      <v-btn
        v-if="isHover"
        v-show="task.status !== 'Deleted'"
        class="text-none text-subtitle-1 ms-3 my-2"
        color="#f75154"
        size="small"
        variant="flat"
        @click="deleteTask"
      >
        Delete
      </v-btn>

      <v-spacer></v-spacer>

      <v-chip-group>
        <v-chip v-for="tag in task.tags" :key="tag">{{ tag }}</v-chip>
      </v-chip-group>
    </div>
  </v-card>
</template>

<style>
.text-disabled {
  text-decoration: line-through;
}
</style>

<script lang="ts">
import { Task } from "@/store/types";
import { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskComponent",
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    completeTask() {
      this.$store.commit("completeTask", this.task);
    },
    unCompleteTask() {
      this.$store.commit("unCompleteTask", this.task);
    },
    deleteTask() {
      this.$store.commit("deleteTask", this.task);
    },
  },
});
</script>
