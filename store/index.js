export const state = () => ({
    counter: 0,
    dates:[],
    message:''
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    setDate(state,list){
        state.dates = list
    },
    setMessage(state,message){
      state.message = message
    }
  }