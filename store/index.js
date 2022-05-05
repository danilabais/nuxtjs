
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
      const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: payload.text,
          source: payload.fromLang,
          target:  payload.toLang,
          format: "text"
        }),
        headers: { "Content-Type": "application/json" }
      });
      let translatedText=await res.json()
    commit('SET_TRANSLATED_TEXT',translatedText)  
    console.log(translatedText)
    
    }    
}


export const getters = {
  translatedText:(state)=>state.translatedText.translatedText
}
