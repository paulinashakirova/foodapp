<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/"><AppLogo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
      
    </ul>
    <div class="smallnum" v-if='totalAmount > 0'>
      {{ totalAmount }}
    </div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>
<script>
import AppLogo from "@/components/AppLogo.vue";
import AppEmptyCart from "@/components/AppEmptyCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    AppLogo,
    AppEmptyCart
  },
  computed: {
    ...mapGetters(["totalAmount"])
    //return this.store.getters.totalAmount;
  }
};
</script>
