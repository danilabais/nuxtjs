<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; text-align:center"><a-typography-title :style="{fontSize:'24px'}">Переводчик</a-typography-title></a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',marginTop:'50px'}" class="card__wrapper">
         <a-card ref="containerRef">
           <a-affix :target=" containerRef">
           <a-select
            show-search
            placeholder="Выберите язык"
            style="width: 100%"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          >
          </a-select>
          </a-affix>
           <a-divider :style="{width:'100%'}"/>
           <a-textarea   placeholder="Введите текст для перевода" :rows="6" />
           <a-button type="primary" style="float:right; margin-top:20px" shape="round" :size="size">
              Перевести
          </a-button>
         </a-card>
         <a-card>
            <a-select
            show-search
            placeholder="Язык перевода"
            style="width: 100%"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          >
          </a-select>
          </a-card>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Переводчик by<a href="https://github.com/danilabais"> danilabais</a>
      </a-layout-footer>
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