<template>
  <base-layout
    :page-title="loadMemory ? loadMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h1 v-if="!loadMemory">There's no Memories yet!</h1>
    <memory-overview
      v-else
      :image="loadMemory.image"
      :title="loadMemory.title"
      :desc="loadMemory.desc"
    />
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";

export default {
  components: { MemoryOverview },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },

  computed: {
    loadMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },

  /* watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  }, */
};
</script>
