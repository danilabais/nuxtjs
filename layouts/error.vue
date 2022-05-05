<template>
  <div class="__nuxt-error-page">
    <a-result status="404" title="404" sub-title="Извините, данной страницы не существует..">
      <a-button type="primary"><nuxt-link to="/">Вернуться на главную</nuxt-link></a-button>
  </a-result>
  </div>
</template>


<style>
.__nuxt-error-page {
  padding: 1rem;
  background: #F7F8FB;
  color: #47494E;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>