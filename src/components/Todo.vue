<template>
  <v-card
    class="mx-auto mt-5"
    color="#36393f"
    max-width="1200"
    theme="dark"
    variant="flat"
  >
    <v-sheet color="#202225">
      <v-card-item>
        <template v-slot:prepend>
          <v-card-title>
            <v-icon icon="mdi-calendar-check" start></v-icon>
            Todo List
          </v-card-title>
        </template>
      </v-card-item>
    </v-sheet>

    <v-chip-group v-model="filters.tags" class="pa-2" multiple filter>
      <v-chip v-for="tag in getTags" :key="tag" :value="tag">{{ tag }}</v-chip>
    </v-chip-group>

    <v-divider></v-divider>

    <div class="pa-3">
      <v-row>
        <v-col>
          <b class="ms-2">Todo</b>
          <TaskComponent
            v-for="item in getTodoTasks.filter((task: Task) => !filters.tags.length || filters.tags.some((tag)=>task.tags.includes(tag)))"
            :key="item.name"
            :task="item"
        /></v-col>
        <v-col>
          <b class="ms-2">Completed</b>
          <TaskComponent
            v-for="item in getCompletedTasks.filter((task: Task) => !filters.tags.length || filters.tags.some((tag)=>task.tags.includes(tag)))"
            :key="item.name"
            :task="item"
          />
        </v-col>
        <v-col>
          <b class="ms-2">Deleted</b>
          <TaskComponent
            v-for="item in getDeletedTasks.filter((task: Task) => !filters.tags.length || filters.tags.some((tag)=>task.tags.includes(tag)))"
            :key="item.name"
            :task="item"
          />
        </v-col>
      </v-row>
    </div>

    <v-divider></v-divider>

    <v-card-actions>
      <v-row class="pa-2">
        <v-col cols="12" class="pb-0">
          <v-text-field
            v-model="addedTask.name"
            clearable
            label="New task"
            type="text"
            variant="solo"
          >
            <template v-slot:append>
              <v-btn
                class="mt-n2"
                @click="addTask"
                :disabled="
                  !addedTask.name ||
                  tasks.some(({ name }) => name === addedTask.name)
                "
              >
                <v-icon icon="mdi-plus-box" start></v-icon>
                Add
              </v-btn>
            </template>
            <template v-slot:details>
              <p v-show="tasks.some(({ name }) => name === addedTask.name)">
                Task name already exist
              </p>
            </template>
          </v-text-field>
        </v-col>
        <v-chip-group v-model="addedTask.tags" class="px-4" multiple filter>
          <v-chip v-for="tag in getTags" :key="tag" :value="tag">{{
            tag
          }}</v-chip>
        </v-chip-group>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Task } from "@/store/types";
import { defineComponent } from "vue";

// Components
import TaskComponent from "./Task.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TodoComponent",

  data() {
    return {
      tasks: [] as Task[],
      filters: { tags: [] },
      addedTask: { name: "", tags: [] } as Partial<Task>,
    };
  },

  computed: {
    ...mapGetters([
      "getTodoTasks",
      "getCompletedTasks",
      "getDeletedTasks",
      "getTags",
    ]),
  },

  mounted() {
    this.tasks = this.$store.state.tasks;
  },

  components: {
    TaskComponent,
  },

  methods: {
    addTask() {
      this.$store.commit("addTask", {
        ...this.addedTask,
        created: new Date(),
        status: "Todo",
      } as Task);
      this.addedTask = { name: "", tags: [] } as Partial<Task>;
    },
  },
});
</script>
