<template>
  <div>
    <h1>API page</h1>
    <!-- <h2>The amount of hotels in Barcelona is: {{hotels}}</h2>
<img :src="this.image" alt="">
<h2>Available hotels</h2> -->
<!-- <h2>{{image}}</h2> -->
<h2>{{location}}</h2>
    <h2>It is {{ weather }} degrees celcium now.</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: null,
      weather: null,
      location: "Barcelona",
      // hotels: 'Barcelona',
      // image: '',
      // availableHotels: null
    };
  },

  async created() {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${this.location}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "6c8191400cmsh2cc737dba3a51c6p1a81ddjsnf4f7ca729f24"
	}
})

    const data = await response.json();
    this.weather = data.current.temp_c
    // this.hotels = data[0].hotels
    // this.image = data[0].image_url
    // this.availableHotels = data[0].available_hotels
    // .then(response => {

    //   console.log('this is response',response)
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  },
  methods: {
    fetchData() {
      this.error = this.weather = null;
      this.loading = true;
      const fetchedId = this.$route.params.id;
      // replace `getPost` with your data fetching util / API wrapper
      getWeather(fetchedId, (err, weather) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return;
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.weather = weather;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
