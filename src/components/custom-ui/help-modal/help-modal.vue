<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { initHelpModal } from './index';

const {
  enable,
  show,
  duration,
  onTapMask,
} = initHelpModal()

const { t } = useI18n()


</script>
<template>

  <div class="hm-container" v-if="enable"
    :class="{ 'hm-container_show': show }"
  >

    <div class="hm-box">

      <!-- OpenAI Key -->
      <div class="hm-part">
        <div class="hm-hd">
          <span>OpenAI Key</span>
        </div>
        <div class="hm-desc">
          <span>{{ t('help.openai_key_desc') }}</span>
        </div>

        <input class="hm-input" :placeholder="t('help.openai_key_ph')" />
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
      <div class="hm-part">
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
          href="https://twitter.com/tsuijohn"
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


</style>