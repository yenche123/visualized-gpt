<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useActionBar } from "./tools/useActionBar"
import DotpulseLoader from "../dotpulse-loader/dotpulse-loader.vue"

const {
  inputEl,
  inputTxt,
  onEnter,
  isLoading,
} = useActionBar()

const { t } = useI18n()

</script>
<template>

  <div class="ab-container">

    <div class="ab-input-box">
      <input 
        class="ab-input" 
        ref="inputEl" 
        v-model.trim="inputTxt" 
        @keyup.enter="onEnter"
        :placeholder="t('common.main_placeholder')"
        autocomplete="off"
      />

      <div class="ab-little-btn">
        <svg-icon class="ablb-svg" name="clean"
          color="var(--normal-placeholder)"
        ></svg-icon>
      </div>
      <div class="ab-little-btn">
        <svg-icon class="ablb-svg" name="help"
          color="var(--normal-placeholder)"
        ></svg-icon>
      </div>
    </div>

    <div class="ab-submit-box"
      :class="{ 'ab-submit-box_enable': inputTxt }"
      @click="onEnter"
    >

      <DotpulseLoader v-if="isLoading"></DotpulseLoader>
      <svg-icon v-else name="send" class="ab-send"
        :color="inputTxt ? 'var(--normal-color)' : 'var(--disable-color)'"
      ></svg-icon>

    </div>

  </div>


</template>

<style scoped>

.ab-container {
  width: 90%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 38px;
  left: 5%;
  z-index: 5000;
}

.ab-input-box {
  max-width: 650px;
  width: 75%;
  height: 50px;
  box-sizing: border-box;
  padding: 10px 12px 10px 24px;
  margin-inline-end: 10px;
  border-radius: 25px;
  background-color: var(--card-bg);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .18);
  position: relative;
  display: flex;
}

.ab-input {
  color: var(--normal-color);
  line-height: 30px;
  height: 30px;
  width: calc(100% - 80px);
  font-size: var(--normal-font);
}

.ab-input::-webkit-input-placeholder {
  color: var(--normal-placeholder);
}

.ab-little-btn {
  width: 35px;
  height: 100%;
  margin-inline-end: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .1s;
}

.ablb-svg {
  width: 20px;
  height: 20px;
}

.ab-submit-box {
  width: 50px;
  height: 50px;
  border-radius: 12.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .18);
  opacity: 1;
  cursor: v-bind("isLoading ? 'auto' : inputTxt ? 'pointer' : 'auto'");
  flex: none;
  transition: .15s;
}

.ab-send {
  width: 25px;
  height: 25px;
}

@media(hover: hover) {

  .ab-little-btn:hover {
    opacity: .7;
  }

  .ab-submit-box:hover {
    opacity: v-bind("isLoading ? '1' : inputTxt ? '.7' : '1'");
  }
}




</style>