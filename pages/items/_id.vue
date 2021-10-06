<template>
  <div>
    <div class="container">
      <section
        class="image"
        :style="
          `background: url('/${currentItem.img}')  center center no-repeat`
        "
      ></section>

      <section class="details">
        <h1>{{ currentItem.item }}</h1>
        <h3>{{ `Price: $${currentItem.price}` }}</h3>
        <div>
          <input v-model="quantity" type="number" min="1" />
          <button class="primary">Add to cart - $ {{ calcTotal }}</button>
        </div>
        <fieldset>
          <legend>Add Ons</legend>
          <div v-for="addOn in currentItem.addOns" :key="addOn">
            <input type="checkbox" />
            <label>{{ addOn }}</label>
          </div>
        </fieldset>
      </section>
      <section class="options">
        <h3>Description</h3>
        <p>{{ currentItem.description }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      price: this.$route.params.price,
      quantity: null
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    currentItem() {
      let result;
      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].menu.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j];
            break;
          }
        }
      }
      return result;
    },
    calcTotal() {
      return this.currentItem.price * this.quantity;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}
</style>
