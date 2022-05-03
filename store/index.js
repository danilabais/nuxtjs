// const NLPCloudClient = require('nlpcloud');

// import axios from "axios";
// import { config } from "vue/types/umd";

export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
    async translate({commit},payload){
    //  config = {
    //   method: 'get',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': 'b8633bfb7911f0dea4649326c363ba9f9956cfd9',
    //     'Access-Control-Allow-Origin': '*',
    //   }
    //  }
    //   // Returns an Axios promise with the results.
    //   // In case of success, results are contained in `response.data`. 
    //   // In case of failure, you can retrieve the status code in `err.response.status` 
    //   // and the error message in `err.response.data.detail`.
    //   let response = await axios.get('https://api.nlpcloud.io/v1/opus-mt-en-es/translation?text=hello',config)
    //   console.log(response)
    }    
}
