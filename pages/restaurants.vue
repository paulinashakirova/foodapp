<template>
  <div>
<h1>Hello from restaurants page</h1>
<div v-for='restaurant in fooddata' :key='restaurant.id'>
  <h2>{{restaurant.name}}</h2>
  <p>{{restaurant.deliveryTime}}</p>
  <p>{{priceFormatting(restaurant.menu[0].price)}}</p>
</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(["fooddata"])
  },
  methods: {
    priceFormatting(item) {
      return '$' + item.toFixed(2)
    }
    
  }
}
</script>

<style lang="scss" scoped>

</style>