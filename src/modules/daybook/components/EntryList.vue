<template>
  <div class="entry-list-contai">
    <div class="px-2 pt-2">
      <input type="text" placeholder="Buscar entrada" class="form-control" />
    </div>
    <div class="entry-scrollarea">
      <entry v-for="item in 100" :key="item"></entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: { Entry: defineAsyncComponent(() => import('./Entry.vue')) },
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
