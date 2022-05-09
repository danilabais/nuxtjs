<template>
<div>
  <a-breadcrumb>
    <a-breadcrumb-item><router-link to="/quotes">quotes</router-link></a-breadcrumb-item>
    <a-breadcrumb-item>{{quote._id}}</a-breadcrumb-item>
  </a-breadcrumb>
  <div>Tags: {{quote.tags.join(' ')}}</div>
  <div>{{quote.author}} ({{quote.authorSlug}})</div>
  <div>{{quote.content}}</div>
  <div>{{quote.dateAdded}}</div>
</div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
        const quote = await $axios.$get('https://api.quotable.io/quotes/'+params.QuotesPage)
        return {quote}
    },

}
</script>

<style>

</style>