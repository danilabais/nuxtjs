<template>
  <a-layout-content style="margin: 0 310px">
    <div
      :style="{
        padding: '50px',
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
            v-model:value="fromLang"
            :options="options"
            
          >
          </a-select>
        </a-affix>
        <a-divider  />
        <a-textarea
          v-model="text"
          :maxLength="250"
          allowClear
          placeholder="Введите текст для перевода"
          v-on:input="autoTranslate"
          :rows="6"
          v-on:pressEnter="pressEnter"
        />
        <div class="control__container">
          <a-tooltip placement="top" title="Включить перевод при наборе">
            <div class="switch__container">
              <a-switch id="switch" 
              v-model="autoTranslateSwitch"
              v-on:change="switchOn"
              checked-children="On"
              un-checked-children="Off"
              />
              <label for="switch">Автоперевод</label>
            </div>
          </a-tooltip>
          
          <a-button
            :disabled="!Boolean(text) || !Boolean(toLang) || !Boolean(fromLang) || !Boolean(isActiveBtn)"
            type="primary"
            shape="round"
            v-on:click="translate"
          >
            Перевести
          </a-button>
        </div>
      </a-card>
      <a-tooltip placement="top" title="Поменять местами">
      <button class="swap__btn" v-on:click="swap">
     <SwapIcon/>
      </button>
      </a-tooltip>
      <a-card>
        <a-select
          show-search
          placeholder="Язык вывода"
          style="width: 100%"
          :options="options"
          v-model="toLang"
        >
        </a-select>
        <a-tooltip  placement="top" :title="isCopy?'Скопировано':'Скопировать'">
        <a-card v-on:click="copyText" class="copyText">
        <a-skeleton :loading="loading" active >
        <p>{{translatedText}}</p>
        </a-skeleton>
        </a-card>
        </a-tooltip>
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
      fromLang: undefined  as String | undefined,
      toLang: undefined as String | undefined,
      text: '' as String,
      containerRef: this.$refs.containerRef,
      autoTranslateSwitch:false as Boolean,
      loading:false as Boolean,
      isActiveBtn:true as Boolean,
      isCopy:false as Boolean,
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
      if (Boolean(!this.autoTranslateSwitch)){
        this.timerTranslate()
        this.isActiveBtn=false
      }
      this.loading=true
      this.$store.dispatch('translate', {
        text: this.text,
        toLang: this.toLang,
        fromLang: this.fromLang,
      })
      
    },
    swap() {
      [this.toLang,this.fromLang]=[this.fromLang,this.toLang]
    },
      autoTranslate() {
      if (Boolean(this.text) && Boolean(this.toLang) && Boolean(this.fromLang) && Boolean(this.fromLang) && Boolean(this.autoTranslateSwitch)) {
        clearTimeout(this.timer)
       this.timer = setTimeout(() => {
         this.translate()
       }, 1000)
      }
    },
      switchOn(e:boolean){
        if (Boolean(this.text) && Boolean(this.toLang) && Boolean(this.fromLang) && Boolean(this.fromLang) && Boolean(this.autoTranslateSwitch)) {
          this.translate()
        } 
      },
      pressEnter(){
        if (Boolean(this.text) && Boolean(this.toLang) && Boolean(this.fromLang) && Boolean(this.fromLang)) {
        this.translate()
        }
      },
      timerTranslate() {
        setTimeout((()=>this.isActiveBtn=true),3000)
      },
      copyText(){
        try {
          navigator.clipboard.writeText(this.translatedText)
          this.isCopy=true
        } catch (error) {
          console.log(error);
        }
      }
  },
  computed: {
    translatedText(){
      this.loading=false
      this.isCopy=false
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
.text__area {
  resize: none !important; 
}
.copyText {
  cursor: pointer;
  margin-top: 50px;
}
</style>
