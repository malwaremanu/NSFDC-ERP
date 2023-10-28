// store/counter.js
export const state = () => ({
    counter: 0, // Initial value
  });
  
  export const mutations = {
    setCounter(state, value) {
      state.counter = value;
    },
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter--;
    },
  };
  