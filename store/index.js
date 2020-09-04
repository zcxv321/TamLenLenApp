export const state = () => ({
    counter: 0,
    dates:[]
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    setDate(state,list){
        state.dates.push(list)
    }
  }