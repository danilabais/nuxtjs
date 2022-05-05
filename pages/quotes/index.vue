<template>
  <div>
      <h1 class="quotes__title">Цитатник</h1>
      <div class="quotes__wrapper">
          <a-card :title="item.author" v-for="item in quotes" :key="item._id" style="width: 300px">
            <template #extra><a href="#">Подробнее</a></template>
            <p>{{item.content}}</p>
        </a-card>
      </div>
  </div>
</template>

<script lang="ts">
//https://github.com/lukePeavey/quotable
import Vue from 'vue'
export default Vue.extend({
    async asyncData() {
        const res = await fetch('https://api.quotable.io/quotes')
        const quotes = (await res.json()).results
        return {quotes}
    },
    
    mounted() {
        
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
}
</style>