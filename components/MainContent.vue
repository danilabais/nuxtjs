<template>
  <a-layout-content style="margin: 0 16px">
    <div
      :style="{
        padding: '24px',
        background: '#fff',
        minHeight: '360px',
        marginTop: '50px',
      }"
      class="card__wrapper"
    >
      <a-card ref="containerRef">
        <a-affix :target="containerRef">
          <a-select
            show-search
            placeholder="Язык перевода"
            style="width: 100%"
            :options="options"
            v-on:change="setFromLang"
          >
            <v-option> Ангийский </v-option>
          </a-select>
        </a-affix>
        <a-divider  />
        <a-textarea
          aria-required
          v-model="text"
          :maxLength="250"
          allowClear
          placeholder="Введите текст для перевода"
          v-on:change="autoTranslate"
          :rows="6"
        />
        <div class="control__container">
          <div class="switch__container">
            <a-switch id="switch" 
            v-model="autoTranslateSwitch"
            checked-children="On"
            un-checked-children="Off"
            />
            <label for="switch">Автоперевод</label>
          </div>
          
          <a-button
            :disabled="!Boolean(text) || !Boolean(toLang) || !Boolean(fromLang)"
            type="primary"
            shape="round"
            v-on:click="translate"
          >
            Перевести
          </a-button>
        </div>
      </a-card>
      <button class="swap__btn" v-on:click="swap">
     <SwapIcon/>
      </button>
      <a-card>
        <a-select
          show-search
          placeholder="Язык вывода"
          style="width: 100%"
          :options="options"
          ref="setToLang"
          v-on:change="setToLang"
        >
        </a-select>
        <div style="user-select: none"><br /><br /></div>
        <a-typography-paragrap> {{translatedText}} </a-typography-paragrap>
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
          key:1,
        },
        {
          value: 'en',
          label: 'Английский',
          key:2,
        },
        {
          value: 'de',
          label: 'Немецкий',
          key:3,
        },
        {
          value: 'fr',
          label: 'Французский',
          key:4,
        },
        {
          value: 'ja',
          label: 'Японский',
          key:5,
        },
      ] as Array<Object>,

      timer: null as any,

      fromLang: '' as String,
      toLang: '' as String,
      text: '' as String,
      containerRef: this.$refs.containerRef,
      autoTranslateSwitch:false as Boolean,
    }
  },
  methods: {
    setFromLang(e: string) {
      this.fromLang = e
    },
    setToLang(e: string) {
      this.toLang = e
    },
    translate() {
      this.$store.dispatch('translate', {
        text: this.text,
        toLang: this.toLang,
        fromLang: this.fromLang,
      })
      
    },
    swap() {
      this.$refs.setToLang.value = 'en'
    },
      autoTranslate() {
      if (Boolean(this.text) && Boolean(this.toLang) && Boolean(this.fromLang) && Boolean(this.fromLang) && Boolean(this.autoTranslateSwitch)) {
        
        clearTimeout(this.timer)
       
       this.timer = setTimeout(() => {
         this.translate()
       }, 1000)
          
            
            // console.log(this.timer)






      }
    }
  },
  computed: {
    translatedText(){
      return this.$store.getters.translatedText
    }
  }
})
</script>

<style>
.switch__container {
  display: flex;
  gap:10px;
}


.control__container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.swap__btn {
  max-width: 50px;
  margin-top: 30px;
  display: inline;
  height: fit-content;
  padding-top: 5px;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
