<script lang="ts" setup>

defineProps({
  color: {
    type: String,
    default: "var(--normal-color)",
  }
})

</script>
<template>
  <div class="dot-pulse">
    <div class="dot-pulse__dot"></div>
  </div>
</template>
<style scoped>

.dot-pulse {
  --uib-size: 28px;
  --uib-speed: 1.3s;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.27);
}

.dot-pulse__dot,
.dot-pulse::before,
.dot-pulse::after {
  content: '';
  display: block;
  height: calc(var(--uib-size) * 0.18);
  width: calc(var(--uib-size) * 0.18);
  border-radius: 50%;
  background-color: v-bind("color");
  transform: scale(0);
}

.dot-pulse::before {
  animation: pulse var(--uib-speed) ease-in-out infinite;
}

.dot-pulse__dot {
  animation: pulse var(--uib-speed) ease-in-out
    calc(var(--uib-speed) * 0.125) infinite both;
}

.dot-pulse::after {
  animation: pulse var(--uib-speed) ease-in-out
    calc(var(--uib-speed) * 0.25) infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }
}


</style>