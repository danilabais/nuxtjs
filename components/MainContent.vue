<template>
    <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',marginTop:'50px'}" class="card__wrapper">
         <a-card ref="containerRef">
           <a-affix :target="containerRef">
           <a-select
            show-search
            placeholder="Язык перевода (не обязательно)"
            style="width: 100%"
            :options="options"
            v-on:change="setFromLang"
          >
          <v-option>
              Ангийский
          </v-option>
          </a-select>
          </a-affix>
           <a-divider :style="{width:'100%'}"/>
           <a-textarea aria-required v-model="text"  placeholder="Введите текст для перевода" :rows="6" />
           <a-button :disabled="!Boolean(text) || !Boolean(toLang)" type="primary" style="float:right; margin-top:20px" shape="round" v-on:click="translate" >
              Перевести
          </a-button>
         </a-card>
         <a-card>
            <a-select
            show-search
            placeholder="Язык перевода"
            style="width: 100%"
            :options="options"
            v-on:change="setToLang"
          >
          </a-select>
          </a-card>
        </div>
      </a-layout-content>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
           options: [
          {
            value: 'ru',
            label: 'Русский',
          },
          {
            value: 'en',
            label: 'Английский',
          }] as Array<Object>,
          fromLang:'' as String,
          toLang:'' as String,
          text:'' as String,
          containerRef: this.$refs.containerRef,
        }
    },
    methods: {
      setFromLang(e:string){
        this.fromLang=e
      },
      setToLang(e:string){
        this.toLang=e
      },
      translate() {
        console.log(this.toLang,this.fromLang,this.text)
      }
    }
})
</script>
