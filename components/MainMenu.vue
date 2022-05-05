<template>
     <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <nuxt-link to="/">Переводчик</nuxt-link>
        </a-menu-item>
        <a-menu-item key="2">
           <nuxt-link to="/lol">Пустая страница</nuxt-link>
        </a-menu-item>
      </a-menu>
</template>

<style>
.ant-menu.ant-menu-dark .ant-menu-item-selected {
  background: none;
  color: red !important;
}
.ant-menu-dark .ant-menu-item-selected > a {
  color: rgb(255 255 255 / 65%);
}
</style>