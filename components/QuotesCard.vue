<template>
  <a-card :title="item.author" style="width: 350px; min-height: 250px">
    <template #extra><a href="#">Подробнее</a></template>
    <p>{{ item.content }}</p>
    <a-button class="card__btn" v-on:click="translate">Перевести</a-button>
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
      const res = await this.$axios.$post(
        'https://libretranslate.de/translate',
        {
          q: this.item.content,
          source: 'en',
          target: 'ru',
          format: 'text',
        }
      )

      this.item.content = res.translatedText
    },
  },
})
</script>

<style>
.card__btn {
  float: right;
  position: absolute;
  bottom: 0;
  margin: 15px;
  right: 0;
}
</style>
