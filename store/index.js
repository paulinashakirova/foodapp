export const state = () => ({
  fooddata: []
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }
//mutations are the only thing that can change the state
//they are only syncrinous
export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data
  }
}
//actions can't change the state, but they can commit mutations that can change the state
//actions are asyncrinous
export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) {return}
    try {
      await fetch(
        "https:dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit("updateFoodData", data);
        });
    } catch (err) {
      console.log(err);
    }
  }
};
//https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants
