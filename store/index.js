
export const state = () => ({
  translatedText:'',
})

export const mutations = {
  SET_TRANSLATED_TEXT(state,payload) {
    state.translatedText=payload
  },
}

export const actions = {
    async translate({commit},payload){
      const translatedText = await this.$axios.$post("/translate", {
          q: payload.text,
          source: payload.fromLang,
          target:  payload.toLang,
          format: "text"
    })
     
    commit('SET_TRANSLATED_TEXT',translatedText)  
    }    
}


export const getters = {
  translatedText:(state)=>state.translatedText.translatedText
}
