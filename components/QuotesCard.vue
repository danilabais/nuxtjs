<template>
  <a-card :title="item.author" style="width: 300px">
    <template #extra><a href="#">Подробнее</a></template>
    <p>{{ item.content }}</p>
    <a-button class="card__btn"  v-on:click="translate">Перевести</a-button>
  </a-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
     props: {
    item: Object,
  },
  methods: {
    // data(){
    //     return {
    //         buttonText: 'Перевести' as String
    //     }
    // },
    async translate() {
       const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: this.item.content,
          source: "en",
          target:  "ru",
          format: "text"
        }),
        headers: { "Content-Type": "application/json" }
      });
      let translatedText=await res.json()
      this.item.content = translatedText.translatedText
    
    },
  },
})
</script>


<style>
.card__btn {
  float: right;
}
</style>
