<template>
  <SuperheroList />
</template>

<script>
import SuperheroList from '~/components/SuperheroList.vue'

export default {
  metaInfo: {
    title: 'Superhero Comic DB Explorer'
  },
  components: {
    SuperheroList
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
