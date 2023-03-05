<script setup lang="ts">
import { useActionBar } from "./tools/useActionBar"

const {
  inputEl,
  inputTxt,
  onEnter
} = useActionBar()

</script>
<template>

  <div class="ab-container">

    <div class="ab-input-box">
      <input 
        class="ab-input" 
        ref="inputEl" 
        v-model.trim="inputTxt" 
        @keyup.enter="onEnter"
        placeholder="What do you want to ask?"
        autocomplete="off"
      />
    </div>

  </div>


</template>

<style scoped>

.ab-container {
  width: 100%;
  padding-block-end: 38px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;
}

.ab-input-box {
  max-width: 750px;
  width: 75%;
  height: 50px;
  box-sizing: border-box;
  padding: 10px 24px;
  border-radius: 25px;
  background-color: var(--card-bg);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .18);
  position: relative;
}

.ab-input {
  color: var(--normal-color);
  line-height: 30px;
  height: 30px;
  width: 80%;
  font-size: var(--normal-font);
}

.ab-input::-webkit-input-placeholder {
  color: var(--normal-placeholder);
}


</style>