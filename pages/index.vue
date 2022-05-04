<template>
  <a-layout style="min-height: 100vh">
    <!-- <a-layout-sider collapsible>
      <div class="logo" />
      <MainMenu/>
    </a-layout-sider> -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; text-align:center"><h1 :style="{fontSize:'24px'}">Переводчик</h1></a-layout-header>
      <MainContent/>
      <MainFooter/>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style >
.card__wrapper {
  display: flex;
}
.card__wrapper>* {
  flex: 0 1 50%;
}
</style>