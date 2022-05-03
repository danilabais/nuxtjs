<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider collapsible>
      <div class="logo" />
      <MainMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; text-align:center"><a-typography-title :style="{fontSize:'24px'}">Переводчик</a-typography-title></a-layout-header>
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