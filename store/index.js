
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
      console.log(payload)
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
    console.log(await res.json())  
    
    
    
    }    
}
