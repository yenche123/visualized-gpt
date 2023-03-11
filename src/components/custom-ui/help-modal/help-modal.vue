<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { initHelpModal } from './index';

const {
  enable,
  show,
  inputTxt,
  inputEl,
  duration,
  onTapMask,
  onInputEnter,
  onInputBlur,
} = initHelpModal()

const { t } = useI18n()


</script>
<template>

  <div class="hm-container" v-if="enable"
    :class="{ 'hm-container_show': show }"
  >

    <div class="hm-bg" @click="onTapMask"></div>

    <div class="hm-box">

      <!-- OpenAI API Key -->
      <div class="hm-part">
        <div class="hm-hd">
          <span>OpenAI API Key</span>
        </div>
        <div class="hm-desc">
          <span>{{ t('help.openai_key_desc') }}</span>
        </div>

        <input class="hm-input" 
          :placeholder="t('help.openai_key_ph')" 
          ref="inputEl" 
          v-model.trim="inputTxt" 
          @keyup.enter="onInputEnter"
          @blur="onInputBlur"
        />
      </div>

      <!-- Open Source -->
      <div class="hm-part">
        <div class="hm-hd">
          <span>{{ t('help.open_source') }}</span>
        </div>
        <a class="hm-btn" 
          href="https://github.com/yenche123/visualized-gpt"
          target="_blank"
        >
          <svg-icon name="github" :coverFillStroke="false" class="hm-opensource-icon"></svg-icon>
          <div class="hm-btn-text">
            <span>{{ t('help.check_it_out') }}</span>
          </div>
        </a>
      </div>

      <!-- Contact Me -->
      <div class="hm-part"
        style="padding-block-end: 0;"
      >
        <div class="hm-hd">
          <span>{{ t('help.contact_me') }}</span>
        </div>

        <!-- Mastodon -->
        <a class="hmp-contact" 
          target="_blank"
          href="https://elk.zone/universeodon.com/@yenche123"
        >
          <svg-icon name="mastodon" 
            :coverFillStroke="false" 
            class="hmp-contact-icon"
          ></svg-icon>
          <div class="hmp-contact-info">
            <div class="hmp-contact-hd">
              <span>Mastodon</span>
            </div>
            <div class="hmp-contact-bd">
              <span>{{ t('help.mastodon_desc') }}</span>
            </div>
          </div>
        </a>

        <!-- Twitter -->
        <a class="hmp-contact" 
          target="_blank"
          href="https://twitter.com/tsuijohn"
        >
          <svg-icon name="twitter" 
            :coverFillStroke="false" 
            class="hmp-contact-icon"
          ></svg-icon>
          <div class="hmp-contact-info">
            <div class="hmp-contact-hd">
              <span>Twitter</span>
            </div>
            <div class="hmp-contact-bd">
              <span>{{ t('help.twitter_desc') }}</span>
            </div>
          </div>
        </a>

        <!-- Email -->
        <a class="hmp-contact" 
          target="_blank"
          href="mailto:tsuiyenche@outlook.com"
        >
          <svg-icon name="outlook" 
            :coverFillStroke="false" 
            class="hmp-contact-icon"
          ></svg-icon>
          <div class="hmp-contact-info">
            <div class="hmp-contact-hd">
              <span>Email</span>
            </div>
            <div class="hmp-contact-bd">
              <span>{{ t('help.email_desc') }}</span>
            </div>
          </div>
        </a>

      </div>

    </div>
  </div>


</template>
<style scoped>

.hm-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6000;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: v-bind("duration + 'ms'");
}

.hm-container_show {
  opacity: 1;
}

.hm-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--popup-bg);
}

.hm-box {
  width: 82%;
  max-width: 550px;
  border-radius: 24px;
  background-color: var(--bg-color);
  max-height: 80vh;
  padding: 24px 14px 20px 24px;
  overflow: scroll;
  position: relative;
}

.hm-part {
  padding-block-end: 20px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hm-hd {
  margin-block-end: 4px;
  font-size: var(--head-font);
  color: var(--card-bg);
  font-weight: 700;
  user-select: none;
}

.hm-desc {
  color: var(--whatever-color);
  font-size: var(--mini-font);
  line-height: 1.5;
  margin-block-end: 10px;
  width: 100%;
  user-select: none;
}

.hm-input {
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--normal-placeholder);
  color: var(--card-bg);
  font-size: var(--normal-font);
  width: 90%;
}

.hm-input::placeholder {
  color: var(--normal-placeholder);
}

.hm-btn {
  background-color: var(--btn-bg);
  padding: 8px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  user-select: none;
  transition: .15s;
}

.hm-opensource-icon {
  width: 28px;
  height: 28px;
  margin-inline-end: 12px;
}

.hm-btn-text {
  font-size: var(--normal-font);
  color: var(--whatever-color);
}

.hmp-contact {
  display: flex;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 100%;
  margin-block-end: 4px;
  position: relative;
  transition: .15s;
  min-width: 90%;
}

.hmp-contact-icon {
  width: 38px;
  height: 38px;
  margin-block-start: 6px;
  margin-inline-end: 18px;
}

.hmp-contact-info {
  flex: 1;
  position: relative;
  min-height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hmp-contact-hd {
  font-size: var(--normal-font);
  font-weight: 700;
  color: var(--card-bg);
}

.hmp-contact-bd {
  font-size: var(--mini-font);
  color: var(--whatever-color);
}

.hm-btn:active {
  background-color: var(--btn-hover-bg);
}

.hmp-contact:active {
  background-color: var(--normal-color);
}

@media(hover: hover) {
  .hm-btn:hover {
    background-color: var(--btn-hover-bg);
  }

  .hmp-contact:hover {
    background-color: var(--normal-color);
  }

}

@media screen and (max-width: 380px) {

  .hm-box {
    width: 80%;
    padding: 24px 10px 16px 20px;
  }

  .hmp-contact {
    margin-block-end: 2px;
  }

  .hmp-contact-icon {
    width: 32px;
    height: 32px;
    margin-block-start: 8px;
    margin-inline-end: 14px;
  }
  
}


</style>