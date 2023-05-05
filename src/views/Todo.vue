<template>
  <v-card
    class="mx-auto mt-5"
    color="#36393f"
    max-width="650"
    min-height="350"
    max-height="100%"
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

        <template v-slot:append>
          <v-btn icon="$close" size="large" variant="text"></v-btn>
        </template>
      </v-card-item>
    </v-sheet>

    <v-chip-group class="px-2" multiple filter>
      <v-chip>Chip 1</v-chip>

      <v-chip>Chip 2</v-chip>

      <v-chip>Chip 3</v-chip>
    </v-chip-group>

    <v-card
      v-for="item in 5"
      :key="item"
      class="ma-4"
      color="#2f3136"
      rounded="lg"
      variant="flat"
    >
      <v-card-item>
        <v-card-title class="text-body-2 d-flex align-center">
          <v-icon color="#949cf7" icon="mdi-calendar" start></v-icon>

          <div class="text-h6">Live Q&A {{ item }}</div>
        </v-card-title>

        <div class="py-2">
          <div class="font-weight-light text-medium-emphasis">
            Join the Vuetify team for a live Question and Answer session.
          </div>
        </div>
      </v-card-item>

      <v-divider></v-divider>

      <div class="px-2 d-flex align-center">
        <v-btn
          class="text-none text-subtitle-1"
          color="#5865f2"
          size="small"
          variant="flat"
        >
          Done
        </v-btn>

        <v-spacer></v-spacer>

        <v-chip-group>
          <v-chip>Personal</v-chip>

          <v-chip>Work</v-chip>

          <v-chip>Family</v-chip>
        </v-chip-group>
      </div>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Todo extends Vue {}
</script>
