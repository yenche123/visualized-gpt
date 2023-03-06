<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { isLoadingKey } from '~/utils/provide-keys';
import util from "~/utils/util"

const { t } = useI18n()

const enable = ref(false)
const show = ref(false)

const _open = async () => {
  if(show.value) return
  enable.value = true
  await util.waitMilli(16)
  show.value = true
}

const _close = async () => {
  if(!enable.value) return
  show.value = false
  await util.waitMilli(300)
  enable.value = false
}

const isLoading = inject(isLoadingKey, ref(false))
watch(isLoading, (newV) => {
  if(newV) _open()
  else _close()
})


</script>
<template>

  <div v-if="enable" class="loading-tip"
    :class="{ 'loading-tip_show': show }"
  >
    <div class="lt-text">{{ t('common.loading_tip') }}</div>
  </div>

</template>
<style>

.loading-tip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  opacity: 0;
}

.loading-tip_show {
  opacity: 1;
}

.loading-tip::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  opacity: .8;
}

.lt-text {
  color: var(--whatever-color);
  font-size: var(--mini-font);
  text-align: center;
  width: 60%;
  position: relative;
  letter-spacing: 1px;
  user-select: none;
}

</style>