<template>
  <n-result
    status="403"
    title="403 禁止访问"
    description="总有些门是对你关闭的"
  >
    <template #footer>
      <n-button @click="historyBack">还是折返吧</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
const historyBack = () => {
  window.history.back()
}
</script>
