<template>
<div>
  <a-layout style="min-height: 100vh">
    <a-layout-sider collapsible>
      <img src="@/assets/images/logo.png" class="logo" />
      <MainMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; text-align:center"><h1 :style="{fontSize:'24px'}">Переводчик</h1></a-layout-header>
      <Nuxt/>
      <MainFooter/>
    </a-layout>
  </a-layout>
</div>
</template>

<style scoped>
.logo {
  max-width: 100%;
  object-fit: contain;
  padding: 10px;
}
</style>