<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <button @click="goToDayBook" type="button" class="btn btn-primary">
      Primary
    </button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    goToDayBook() {
      this.$router.push({ name: 'no-entry' })
    },
  },
}
</script>
