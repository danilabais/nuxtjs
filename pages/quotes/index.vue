<template>
  <div>
    
      <h1 class="quotes__title">Цитатник</h1>
      <div class="quotes__wrapper">
            <QuotesCard :title="item.author" v-for="item in quotes" :item="item" :key="item._id"/>
      </div>
      <a-pagination v-on:change="chagePage" v-model="current" :total="50" show-less-items />
  </div>
</template>

<script lang="ts">
//https://github.com/lukePeavey/quotable
import Vue from 'vue'
export default Vue.extend({
 
    async asyncData({ $axios }) {
        const res = await $axios.$get('https://api.quotable.io/quotes')
        const quotes=res.results
        return {quotes}
    },
    data() {
        return {
            current:1,
        }
    },
    methods: {
        chagePage(e) {
        }
    }

})
</script>

<style scoped>
.quotes__title {
    text-align: center;
    margin-top: 20px;
    font-size: 3rem;
}
.quotes__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
    padding: 0 30px;
    align-items: center;
}
</style>